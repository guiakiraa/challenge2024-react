import { Link } from "react-router-dom";
import { DivOpcoes1 } from "../../styles"
import { OpcoesPrincipalProps } from "../../types"
import { useNavigate } from 'react-router-dom';

export default function OpcoesHome1({logo1, logo2, logo3}: OpcoesPrincipalProps){

    const navigate = useNavigate();
    const irParaDiagnostico = () => {
        navigate("/diagnostico")
    }
    const irParaRevisao = () => {
        navigate("/revisao")
    }
    const irParaHistorico = () => {
        navigate("/historico")
    }

    return(
        <DivOpcoes1>
            <h2>O que vamos fazer hoje?</h2>
            <div className="container">    
                <div id="diagnostico" className="itemOpcao">
                    <img src={logo2} alt="diagnóstico automotivo" onClick={irParaDiagnostico}/>
                    Diagnóstico
                </div>
                <div id="revisao" className="itemOpcao" onClick={irParaRevisao}>
                    <img src={logo1} alt="revisão assistida"/>
                    Revisão
                </div>
                <div id="historico" className="itemOpcao" onClick={irParaHistorico}>
                    <img src={logo3} alt="historico" />
                    Histórico
                </div>
            </div>
            
        </DivOpcoes1>
    )
}