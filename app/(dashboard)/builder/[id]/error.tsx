'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC, useEffect } from 'react'

interface errorProps {
  error: Error
}

const Error: FC<errorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center w-full h-full flex-col gap-5'>
      <h2 className='text-destructive text-4xl'>Something Went Wrong!</h2>
      <Button asChild>
        <Link href={`/`}>Go back to Home</Link>
      </Button>
    </div>
  )
}

export default Error
