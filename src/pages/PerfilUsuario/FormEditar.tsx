import React from 'react';
import './FormEditar.css';

const FormEditar: React.FC = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-img">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <button className="edit-button">✏️ Alterar foto de perfil</button>
      </div>
      
      <div className="profile-label">
        <div className="perfil-input">
          <label>Alterar nome social ✏️</label>
          <input type="text" disabled value="Nome Atual" />
        </div>
        <div className="perfil-input">
          <label>Alterar e-mail ✏️</label>
          <input type="text" disabled value="E-mail Atual" />
        </div>
      </div>
    </div>
  )
}

export default FormEditar;