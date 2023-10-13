import { FC } from 'react'
import { ImSpinner2 } from 'react-icons/im'
interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <ImSpinner2 className='animate-spin w-12 h-12' />
    </div>
  )
}

export default loading
