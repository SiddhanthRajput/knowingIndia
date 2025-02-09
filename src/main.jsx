import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>

    <App />
  </Provider>

)
