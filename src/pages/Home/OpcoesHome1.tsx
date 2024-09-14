import { DivOpcoes1 } from "../../styles"
import { OpcoesPrincipalProps } from "../../types"

export default function OpcoesHome1({logo1, logo2, logo3}: OpcoesPrincipalProps){
    return(
        <DivOpcoes1>
            <h2>O que vamos fazer hoje?</h2>
            <div className="container">    
                <img src={logo1} alt="revisão assistida"/>
                <img src={logo2} alt="diagnóstico automotivo" />
                <img src={logo3} alt="historico" />
            </div>
            
        </DivOpcoes1>
    )
}