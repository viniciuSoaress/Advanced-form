'use client'

import { FormHome } from "./form"

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { useState } from 'react'
import { Button } from "../ui/button"

const FormSchema = z.object({
  username: z.string().min(3, { message: 'Nome deve comter 3 ou mais letrs' }),
  email: z.string().email({ message: 'E-mail e obrigatorio.' })
})

export type FormProps = z.infer<typeof FormSchema>




export function FormUser() {

  const [user, setUser] = useState<FormProps | undefined>(undefined)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const form = useForm<FormProps>({
    resolver: zodResolver(FormSchema),
    mode: 'all'
  })

  function handleSubmit(data: FormProps) {
    setUser(data)
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  return (
    <div>
      <FormHome form={form} onSubmit={handleSubmit} />

      {isOpenModal && (
        <div className="w-screen h-screen bg-background absolute top-0 left-0 flex flex-col justify-between items-center py-20 px-10">
          <div>
            <p>Olà, {user?.username}!</p>
            <p>Esse e uma demostrção de criaçao de formulario, utilizado para praticar de estudos.</p>
          </div>

          <Button onClick={handleCloseModal}>close</Button>
        </div>
      )}
    </div>
  )

}