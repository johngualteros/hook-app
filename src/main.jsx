import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoApp } from './useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)