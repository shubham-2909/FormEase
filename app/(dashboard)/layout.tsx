import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { UserButton } from '@clerk/nextjs'
import { FC, ReactNode } from 'react'

interface layoutProps {
  children: ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen min-w-full max-h-screen bg-background'>
      <nav className='flex justify-between items-center border-b border-border h-[60px] px-4 py-2'>
        <Logo />
        <div className='flex items-center gap-4'>
          <ThemeSwitcher />
          <UserButton afterSignOutUrl='/sign-in' />
        </div>
      </nav>
      <main className='flex w-full flex-grow'>{children}</main>
    </div>
  )
}

export default layout
