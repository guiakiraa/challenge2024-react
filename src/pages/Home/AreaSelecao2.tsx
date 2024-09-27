import { DivAreaSelecao2} from "../../styles"
import { AreaSelecaoProps } from "../../types"
import { useNavigate } from 'react-router-dom';


export default function AreaSelecao2({inicioConteudo, finalConteudo, conteudoMarcado, imagem, irPara} : AreaSelecaoProps){
    const navigate = useNavigate();

    const irParaPagina = () => {
        navigate(irPara)
    }

    return(
        <DivAreaSelecao2>
            <img src={imagem} alt="texto de funcionalidade" onClick={irParaPagina}/>
            <div className="lado2">
                <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong></h3>
                <p>{finalConteudo}</p>
                <p className="topico"><span>1</span>SIMPLES de se utilizar</p>
                <p className="topico"><span>2</span>RÁPIDO de fazer</p>
                <p className="topico"><span>3</span>ASSERTIVO no resultado</p>
            </div>

        </DivAreaSelecao2>
    )
}