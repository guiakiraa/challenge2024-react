import { DivAreaSelecao2} from "../../styles"
import { AreaSelecaoProps } from "../../types"
import { useNavigate } from 'react-router-dom';


export default function AreaSelecao2({inicioConteudo, finalConteudo, conteudoMarcado, imagem, textoBotao, irPara} : AreaSelecaoProps){
    const navigate = useNavigate();

    const irParaPagina = () => {
        navigate(irPara)
    }

    return(
        <DivAreaSelecao2>
            <img src={imagem} alt="texto de funcionalidade" />
            <div className="lado2">
                <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong>{finalConteudo}</h3>
                <button onClick={irParaPagina}>{textoBotao}</button>
            </div>

        </DivAreaSelecao2>
    )
}