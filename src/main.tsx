import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './globalStyled.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Login from './pages/Login/index.tsx'
import CadastroUsuario from './pages/CadastroUsuario/index.tsx'
import CadastroCarro from './pages/CadastroCarro/index.tsx'
import Equipe from './pages/Equipe/index.tsx'
import CadastroEndereco from './pages/CadastroEndereco/index.tsx'
import Historico from './pages/Historico/index.tsx'
import Perfil from './pages/Perfil/index.tsx'

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
        path: '/cadastro/endereco',
        element: <CadastroEndereco />
      },
      {
        path: '/cadastro/carro',
        element: <CadastroCarro />
      },
      {
        path: '/equipe',
        element: <Equipe />
      },
      {
        path: '/historico',
        element: <Historico />
      },
      {
        path:'/perfil',
        element: <Perfil />
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
