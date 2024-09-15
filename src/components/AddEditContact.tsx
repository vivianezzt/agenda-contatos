import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../reducers/store'
import { addContact, editContact } from '../reducers/ContactsSlice'
import { Contact } from '../types'
import { FormContainer, Input, Button } from '../styles'

const AddEditContact: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contacts = useSelector((state: RootState) => state.contacts.contacts)

  const existingContact = contacts.find((contact) => contact.id === Number(id))

  const [name, setName] = useState(existingContact ? existingContact.name : '')
  const [email, setEmail] = useState(
    existingContact ? existingContact.email : ''
  )
  const [phone, setPhone] = useState(
    existingContact ? existingContact.phone : ''
  )

  useEffect(() => {
    if (id && existingContact) {
      setName(existingContact.name)
      setEmail(existingContact.email)
      setPhone(existingContact.phone)
    }
  }, [id, existingContact])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (id && existingContact) {
      dispatch(editContact({ id: Number(id), name, email, phone }))
    } else {
      const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1
      dispatch(addContact({ id: newId, name, email, phone }))
    }

    navigate('/')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>{id ? 'Editar Contato' : 'Adicionar Novo Contato'}</h2>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">
        {id ? 'Salvar Alterações' : 'Adicionar Contato'}
      </Button>
    </FormContainer>
  )
}

export default AddEditContact
