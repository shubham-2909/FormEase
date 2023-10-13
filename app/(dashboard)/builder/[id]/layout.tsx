import { FC, ReactNode } from 'react'

interface layoutProps {
  children: ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return <div className='flex w-full mx-auto flex-grow'>{children}</div>
}

export default layout
