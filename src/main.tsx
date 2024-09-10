import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './globalStyled.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Login from './pages/Login/index.tsx'
import CadastroUsuario from './pages/CadastroUsuario/index.tsx'
import CadastroCarro from './pages/CadastroCarro/index.tsx'
import Equipe from './pages/Equipe/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cadastro',
        element: <CadastroUsuario />
      },
      {
        path: '/cadastro/carro',
        element: <CadastroCarro />
      },
      {
        path: '/equipe',
        element: <Equipe />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
