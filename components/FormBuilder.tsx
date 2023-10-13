'use client'
import { Form } from '@prisma/client'
import { FC } from 'react'
import PrevievDialogBtn from './PrevievDialogBtn'
import SaveFormBtn from './SaveFormBtn'
import PublishFormBtn from './PublishFormBtn'
import Designer from './Designer'
import { DndContext } from '@dnd-kit/core'
import DragOverlayWrapper from './DragOverlayWrapper'

interface FormBuilderProps {
  form: Form
}

const FormBuilder: FC<FormBuilderProps> = ({ form }) => {
  return (
    <DndContext>
      <main className='flex flex-col w-full'>
        <nav className='flex justify-between gap-3 border-b-2 p-4 items-center'>
          <h2 className='truncate font-medium'>
            <span className='text-muted-foreground mr-2'>Form:</span>
            {form.name}
          </h2>
          <div className='flex items-center gap-2'>
            <PrevievDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div className='flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]'>
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  )
}

export default FormBuilder
