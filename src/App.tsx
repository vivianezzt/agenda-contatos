import React from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { AppContainer } from './styles'

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </AppContainer>
  )
}

export default App
