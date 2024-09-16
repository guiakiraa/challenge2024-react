import { useState } from 'react';
import { PerfilStyle } from "../../styles";

export default function AbaPerfil() {

  const [editandoNome, setEditandoNome] = useState(false);
  const [editandoEmail, setEditandoEmail] = useState(false);

  const mudarNome = () => {
    setEditandoNome(!editandoNome); 
  };

  const mudarEmail = () => {
    setEditandoEmail(!editandoEmail); 
  };

  return (
    <PerfilStyle>
      <div className="user">
        <img src="../../public/perfil.png" alt="Perfil" />
        <p>Editar perfil</p>
      </div>

      <div className="infoUser">
        <p onClick={mudarNome}>
          {editandoNome ? (
            <input type="text" placeholder="Digite o nome social" />
          ) : (
            "Alterar nome social"
          )}
        </p>
        <h3>User 1</h3>

        <p onClick={mudarEmail}>
          {editandoEmail ? (
            <input type="text" placeholder="Digite o novo e-mail" />
          ) : (
            "Alterar e-mail"
          )}
        </p>
        <h3>user1@fiap.com.br</h3>
      </div>
    </PerfilStyle>
  );
}

