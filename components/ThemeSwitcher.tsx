'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'

const ThemeSwitcher: FC = ({}) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null //avoid rehydration errors
  return (
    <Tabs defaultValue={theme}>
      <TabsList className='border'>
        <TabsTrigger value='light' onClick={() => setTheme('light')}>
          <SunIcon className='w-[1.2rem] h-[1.2rem]' />
        </TabsTrigger>
        <TabsTrigger value='dark' onClick={() => setTheme('dark')}>
          <MoonIcon className='w-[1.2rem] h-[1.2rem] rotate-90 transition-all dark:rotate-0' />
        </TabsTrigger>
        <TabsTrigger value='system' onClick={() => setTheme('system')}>
          <DesktopIcon className='w-[1.2rem] h-[1.2rem]' />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher
