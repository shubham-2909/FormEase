import { FC } from 'react'
import { Button } from './ui/button'
import { HiSaveAs } from 'react-icons/hi'

interface SaveFormBtnProps {}

const SaveFormBtn: FC<SaveFormBtnProps> = ({}) => {
  return (
    <Button variant={'outline'} className='gap-2'>
      <HiSaveAs className='h-4 w-4' />
      Save
    </Button>
  )
}

export default SaveFormBtn
