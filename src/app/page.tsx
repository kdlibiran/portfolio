import type { Metadata } from 'next'
import Code from '@/components/Code'
import LargeHeading from '@/components/ui/LargeHeading'
import AboutMeTabs from '@/components/AboutMeTabs'

export const metadata: Metadata = {
  title: 'Kyle Libiran',
  description: 'Portfolio',
}

export default function Main() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      <div className='flex shrink-0 flex-col justify-center items-center m-h-screen h-screen snap-start'>
        <LargeHeading>              
          <Code animated show={true} language={'javascript'} code={'return("Welcome To My Website")'}/>
        </LargeHeading>
      </div>
      <div className='flex shrink-0 flex-col justify-center items-center m-h-screen h-screen snap-start gap-6'>  
          <AboutMeTabs />
      </div>
    </div>
  )
}
