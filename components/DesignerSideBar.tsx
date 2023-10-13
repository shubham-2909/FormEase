import { FC } from 'react'
import { FormElements } from './FormElements'
import SideBarBtnElement from './SideBarBtnElement'

interface DesignerSideBarProps {}

const DesignerSideBar: FC<DesignerSideBarProps> = ({}) => {
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-grow flex-col gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full'>
      Elements
      <SideBarBtnElement formElement={FormElements.TextField} />
    </aside>
  )
}

export default DesignerSideBar
