import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './reducers/store'
import { GlobalStyles } from './styles/global'

ReactDOM.render(
  <Provider store={store}>
    <>
      <GlobalStyles />
      <App />
    </>
  </Provider>,
  document.getElementById('root')
)
