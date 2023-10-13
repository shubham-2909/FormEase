import { FC } from 'react'
import { Button } from './ui/button'
import { MdPreview } from 'react-icons/md'
interface PrevievDialogBtnProps {}

const PrevievDialogBtn: FC<PrevievDialogBtnProps> = ({}) => {
  return (
    <Button variant={'outline'} className='gap-2'>
      <MdPreview className='h-6 w-6' />
      Preview
    </Button>
  )
}

export default PrevievDialogBtn
