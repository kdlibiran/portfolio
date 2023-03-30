'use client'

import { useTheme } from 'next-themes'
import Highlight, { defaultProps, type Language } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import { FC, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CodeProps {
  code: string
  show: boolean
  language: Language
  animationDelay?: number
  animated?: boolean
}

const Code: FC<CodeProps> = ({
  code,
  show,
  animated,
  animationDelay,
  language,
}) => {
  const { theme: applicationTheme } = useTheme()
  const [text, setText] = useState<string>(animated ? '' : code)
  const {ref,inView} = useInView({ 
    threshold: 0.5,
    triggerOnce: true,
   })
  
  useEffect(() => {
    if (show && animated && inView) {
      let i = 0
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i))
          i++
          if (i > code.length) {
            clearInterval(intervalId)
          }
        }, 15)

        return () => clearInterval(intervalId)
      }, animationDelay || 150)
    }
  }, [code, show, animated, animationDelay, inView])

  // number of lines
  const lines = text.split(/\r\n|\r|\n/).length
  const theme = applicationTheme === 'light' ? lightTheme : darkTheme

  return (
    <div ref ={ref}>
      <Highlight {...defaultProps} code={text} language={language} theme={theme} >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className +
              'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar h-fit'
            }
            style={{
              opacity: show ? 1 : 0,
            }}>
            {tokens.map((line, i) => {
              // eslint-disable-next-line no-unused-vars
              const { key, ...rest } = getLineProps({ line, key: i })
              return (
                <div key={`line-${i}`} style={{position: 'relative' }} {...rest} className='text-slate-900 dark:text-slate-50'>
    
                  {line.map((token, index) => {
                    // eslint-disable-next-line no-unused-vars
                    const { key, ...props } = getTokenProps({ token, i })
                    return <span key={index} {...props} />
                  })}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default Code