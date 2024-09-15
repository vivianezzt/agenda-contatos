import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactList from './components/ContactList'
import AddEditContact from './components/AddEditContact'
import { AppContainer } from './styles/styles'

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/edit/:id" element={<AddEditContact />} />
          <Route path="/add" element={<AddEditContact />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}

export default App
