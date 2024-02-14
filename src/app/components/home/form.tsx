'use client'


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/form'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { FormProps } from './FormUser'
import { UseFormReturn } from 'react-hook-form'

type FormHomeProps = {
  form: UseFormReturn<{
    username: string;
    email: string;
  }>,
  onSubmit: (data: FormProps) => void
}

export function FormHome({ form, onSubmit }: FormHomeProps) {



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='border p-5 w-[460px] rounded-md' >

        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel id='name'>Nome de Usuario</FormLabel>

              <FormControl>
                <Input form='name' placeholder='username' {...field} />
              </FormControl>

              <FormDescription>
                Entre com seu nome.
              </FormDescription>

              <FormMessage className='text-sm' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>

              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>

              <FormDescription>
                Entre com seu nome.
              </FormDescription>

              <FormMessage className='text-sm' />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full mt-4'>Submit</Button>

      </form>
    </Form>
  )
}