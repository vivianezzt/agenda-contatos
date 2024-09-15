import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers/store'
import ContactItem from './ContactItem'
import { ListContainer } from '../styles'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)

  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </ListContainer>
  )
}

export default ContactList
