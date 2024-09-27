import { DivAreaSelecao3 } from "../../styles"
import { AreaSelecao3Props } from "../../types"

export default function AreaSelecao3({imagem, texto} : AreaSelecao3Props){
    return(
        <DivAreaSelecao3>
        <p>{texto}</p>
        <img src={imagem} alt="" />
        </DivAreaSelecao3>
    )
}