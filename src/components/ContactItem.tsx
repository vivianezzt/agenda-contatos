import React from 'react'
import { useDispatch } from 'react-redux'
import { removeContact } from '../reducers/ContactsSlice'
import { ContactContainer, Button } from '../styles/styles'

interface ContactItemProps {
  id: number
  name: string
  email: string
  phone: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  id,
  name,
  email,
  phone
}) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeContact(id))
  }

  return (
    <ContactContainer>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <Button onClick={handleRemove}>Remover</Button>
    </ContactContainer>
  )
}

export default ContactItem
