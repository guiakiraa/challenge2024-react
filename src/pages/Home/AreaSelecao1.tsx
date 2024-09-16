import { DivAreaSelecao } from "../../styles"
import { AreaSelecaoProps } from "../../types"
import { useNavigate } from 'react-router-dom';

export default function AreaSelecao1({inicioConteudo, finalConteudo, conteudoMarcado, imagem, textoBotao, irPara} : AreaSelecaoProps){
    const navigate = useNavigate();
    const irParaPagina = () => {
        navigate(irPara)
    }
    return(
        <DivAreaSelecao>
            <div className="lado1">
                <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong>{finalConteudo}</h3>
                <button onClick={irParaPagina}>{textoBotao}</button>
            </div>
            <img src={imagem} alt="texto de funcionalidade" />
        </DivAreaSelecao>
    )
}