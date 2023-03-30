'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  if (theme == 'dark'){ return (
        <div>
            <Button variant='icon' size='lg' onClick = {() => setTheme('light')}>
                <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
                <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
            </Button>
        </div>
)}else{
    return (
        <div>
            <Button variant='icon' size='lg' onClick = {() => setTheme('dark')}>
                <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
                <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
            </Button>
        </div>
    )
}
}