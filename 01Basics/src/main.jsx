import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherUser = "HC"

const reactElement = React.createElement( //inside React library
  'a',
  {href : 'https://google.com', target: '_blank'},
  'click meee',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  reactElement)
