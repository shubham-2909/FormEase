'use client'
import { FC } from 'react'
import DesignerSideBar from './DesignerSideBar'
import { useDroppable } from '@dnd-kit/core'
interface DesignerProps {}

const Designer: FC<DesignerProps> = ({}) => {
  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  })
  return (
    <div className='flex w-full h-full'>
      <div className='p-4 w-full'>
        <div className='bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-grow flex-col items-center justify-start flex-1 overflow-y-auto'>
          <p className='text-muted-foreground text-3xl flex items-center flex-grow font-bold'>
            Drop here
          </p>
        </div>
      </div>
      <DesignerSideBar />
    </div>
  )
}

export default Designer
