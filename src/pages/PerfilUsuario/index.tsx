import Menu from "../../components/Menu";
import React from 'react';
import ReactDOM from 'react-dom';
import FormEditar from './FormEditar';
import './styles.css'; // Adicione este arquivo para estilização global (se necessário)

export default function EditarPerfil(){

    return(
        <>
            <Menu/>
            <FormEditar />
        </>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <FormEditar />
  </React.StrictMode>,
  document.getElementById('root')
);