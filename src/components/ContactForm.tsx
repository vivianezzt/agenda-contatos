import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../reducers/ContactsSlice'
import { FormContainer, Input, Button } from '../styles'

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
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">Adicionar Contato</Button>
    </FormContainer>
  )
}

export default ContactForm
