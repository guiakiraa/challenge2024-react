import { DivAreaSelecao5 } from "../../styles";
import { AreaSelecao5Props } from "../../types";

export default function AreaSelecao5({titulo, texto, textoBotao, imagem} : AreaSelecao5Props){
    return(
        <DivAreaSelecao5>
            <div className="lado1">
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <button>{textoBotao}</button>
            </div>
            <img src={imagem} alt="" />
        </DivAreaSelecao5>
    )
}