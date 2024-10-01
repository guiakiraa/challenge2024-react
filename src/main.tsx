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
import Revisao from './pages/revisao/index.tsx'
import Erro from './pages/Erro/index.tsx'
import Historico from './pages/Historico/index.tsx'
import Perfil from './pages/Perfil/index.tsx'
import CadastroEndereco from './pages/CadastroEndereco/index.tsx'
import Diagnostico from './pages/Diagnostico/index.tsx'
import Ajuda from './pages/Ajuda/index.tsx'
import WatsonChat from './pages/Diagnostico/WatsonChat.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
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
        path: '/diagnostico',
        element: <Diagnostico />
      },
      {
        path: '/cadastro/endereco',
        element: <CadastroEndereco />
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
      },
      {
        path: '/revisao',
        element: <Revisao />
      },
      {
        path: '/historico',
        element: <Historico />
      },
      {
        path:'/perfil',
        element: <Perfil />
      },
      {
        path: '/ajuda',
        element: <Ajuda />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
