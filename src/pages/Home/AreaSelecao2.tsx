import { DivAreaSelecao2} from "../../styles"
import { AreaSelecaoProps } from "../../types"

export default function AreaSelecao2({inicioConteudo, finalConteudo, conteudoMarcado, imagem, textoBotao} : AreaSelecaoProps){
    return(
        <DivAreaSelecao2>
            <img src={imagem} alt="texto de funcionalidade" />
            <div className="lado2">
                <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong>{finalConteudo}</h3>
                <button>{textoBotao}</button>
            </div>

        </DivAreaSelecao2>
    )
}