import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  width: 300px;
  font-size: 1rem;
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  width: 400px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
