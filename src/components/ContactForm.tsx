import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../reducers/ContactsSlice'
import { FormContainer, Input, Button } from '../styles/styles'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      addContact({
        id: Date.now(),
        name,
        email,
        phone
      })
    )
    setName('')
    setEmail('')
    setPhone('')
  }

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value)
    setPhone(formattedPhone)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        placeholder="Telefone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <Button type="submit">Adicionar Contato</Button>
    </FormContainer>
  )
}

export default ContactForm
