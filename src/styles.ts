import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 20px;
  width: 450px;
  height: 450px;
  box-shadow: 10px 10px 10px 10px #232323;
`

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  width: 300px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1rem;

  &:hover {
    background-color: #836fff;
  }
`

export const ButtonRemove = styled.button`
  padding: 8px 16px;
  background-color: #483d8b;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px;
  width: 350px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  div {
    width: 70%;
    text-align: left;
  }

  strong {
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #555;
  }

  span {
    font-size: 0.9rem;
    color: #999;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #363636;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #232323;
  color: #fff;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1c1c1c;
`
export const ButtonEdit = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`
