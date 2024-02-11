'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/form'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { UserIcon } from 'lucide-react'

const FormSchema = z.object({
  username: z.string().min(2, { message: 'Username must be a least 2 characters.' }),
  email: z.string().email(),
})

type From = z.infer<typeof FormSchema>



export function FormHome() {

  const form = useForm<From>({
    resolver: zodResolver(FormSchema),
    mode: 'all'
  })

  function onSubmit(data: From) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='border p-5 w-[460px] rounded-md' >

        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel id='name'> UserName </FormLabel>

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
              <FormLabel>Email</FormLabel>

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

        <Button type='submit' className='w-full'>Submit</Button>

      </form>
    </Form>
  )
}