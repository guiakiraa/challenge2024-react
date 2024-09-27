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
                <div className="linha">
                    <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong></h3>
                    <p>{finalConteudo}</p>
                </div>
                <button onClick={irParaPagina}>{textoBotao}</button>
            </div>
            <img src={imagem} alt="texto de funcionalidade" />
        </DivAreaSelecao>
    )
}