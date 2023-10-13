import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import { FC, useState } from 'react'
import { ElementsType, FormElements } from './FormElements'
import { SidebarBtnElementDragOverlay } from './SideBarBtnElement'

interface DragOverlayWrapperProps {}

const DragOverlayWrapper: FC<DragOverlayWrapperProps> = ({}) => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null)
  useDndMonitor({
    onDragStart(event) {
      setDraggedItem(event.active)
    },
    onDragCancel(event) {
      setDraggedItem(null)
    },
    onDragEnd(event) {
      setDraggedItem(null)
    },
  })
  if (!draggedItem) return null
  let node = <div>no drag overlay</div>
  const isSideBarBtnElement = draggedItem.data?.current?.isDesignerBtnElement

  if (isSideBarBtnElement) {
    const type = draggedItem.data.current?.type as ElementsType
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />
  }
  return <DragOverlay>{node}</DragOverlay>
}

export default DragOverlayWrapper
