import { GetFormById } from '@/actions/form'
import FormBuilder from '@/components/FormBuilder'
import { FC } from 'react'
import { ImSpinner2 } from 'react-icons/im'

interface pageProps {
  params: {
    id: string
  }
}

const page: FC<pageProps> = async ({ params }) => {
  const { id } = params
  const form = await GetFormById(Number(id))
  if (!form) {
    throw new Error('Form Not Found!')
  }
  return <FormBuilder form={form} />
}

export default page
