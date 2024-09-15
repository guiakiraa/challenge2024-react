import { DivAreaSelecao } from "../../styles"
import { AreaSelecaoProps } from "../../types"

export default function AreaSelecao1({inicioConteudo, finalConteudo, conteudoMarcado, imagem, textoBotao} : AreaSelecaoProps){
    return(
        <DivAreaSelecao>
            <div className="lado1">
                <h3>{inicioConteudo}<strong>{conteudoMarcado}</strong>{finalConteudo}</h3>
                <button>{textoBotao}</button>
            </div>
            <img src={imagem} alt="texto de funcionalidade" />
        </DivAreaSelecao>
    )
}