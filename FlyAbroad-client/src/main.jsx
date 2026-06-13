import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserPen } from 'lucide-react'
import { UserProvider } from './Context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
</StrictMode>,
)
