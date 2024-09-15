import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ContactContainer,
  ListContainer,
  ButtonRemove,
  ButtonEdit
} from '../styles/styles'
import { RootState } from '../reducers/store'
import { Contact } from '../models/types'
import { removeContact } from '../reducers/ContactsSlice'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(removeContact(id))
  }

  return (
    <ListContainer>
      {contacts.map((contact: Contact) => (
        <ContactContainer key={contact.id}>
          <div>
            <strong>{contact.name}</strong>
            <p>{contact.email}</p>
            <span>{contact.phone}</span>
          </div>
          <div>
            <Link to={`/edit/${contact.id}`}>
              <ButtonEdit>Editar</ButtonEdit>
            </Link>
            <ButtonRemove onClick={() => handleRemove(contact.id)}>
              Remover
            </ButtonRemove>
          </div>
        </ContactContainer>
      ))}
      <Link to="/add">
        <ButtonEdit>Adicionar Novo Contato</ButtonEdit>
      </Link>
    </ListContainer>
  )
}

export default ContactList
