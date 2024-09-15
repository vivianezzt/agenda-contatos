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

  // Função para formatar o número de telefone conforme o padrão brasileiro
  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses no DDD
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o hífen entre o 5º e o 6º dígito
      .replace(/(-\d{4})\d+?$/, '$1') // Limita o número a 9 dígitos após o DDD
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value) // Formata o telefone
    setPhone(formattedPhone) // Atualiza o estado com o telefone formatado
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
        value={phone} // Mostra o valor formatado
        onChange={handlePhoneChange} // Chama a função de formatação
        required
      />
      <Button type="submit">Adicionar Contato</Button>
    </FormContainer>
  )
}

export default ContactForm
