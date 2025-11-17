import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import AppRouter from './router/Routes' 
import AuthProvider from './Provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={AppRouter}></RouterProvider> 
    </AuthProvider>
  </StrictMode>,
)