'use client'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ImSpinner2 } from 'react-icons/im'
import { toast } from './ui/use-toast'
import { formSchema, formSchemaType } from '@/schemas/form'
import { CreateForm } from '@/actions/form'
interface CreateFormButtonProps {}

const CreateFormButton: FC<CreateFormButtonProps> = ({}) => {
  const form = useForm<formSchemaType>({ resolver: zodResolver(formSchema) })

  async function onSubmit(values: formSchemaType) {
    try {
      const formId = await CreateForm(values)
      toast({
        title: 'Success',
        description: 'From Created Successfully',
      })
      console.log(formId)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something Went Wrong Please try again',
        variant: 'destructive',
      })
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create New Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a New Form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            className='w-full mt-4'
            type='submit'
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className='animate-spin' />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFormButton
