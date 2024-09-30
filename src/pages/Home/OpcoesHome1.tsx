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
            <h2>Trilhando um caminho mais <span>seguro</span></h2>
            <div className="container">    
                <div id="diagnostico" className="itemOpcao"  onClick={irParaRevisao}>
                    <img src={logo2} alt="diagnóstico automotivo"/>
                    <h3>REVISÃO</h3>
                    <p>Revise seu veículo para identificar problemas</p>
                </div>
                <div id="revisao" className="itemOpcao" onClick={irParaDiagnostico}>
                    <img src={logo1} alt="revisão assistida"/>
                    <h3>DIAGNÓSTICO</h3>
                    <p>Descubra o problema do seu veículo</p>
                </div>
                <div id="historico" className="itemOpcao" onClick={irParaHistorico}>
                    <img src={logo3} alt="historico" />
                    <h3>HISTÓRICO</h3>
                    <p>Veja suas revisões e diagnósticos anteriores</p>

                </div>
            </div>
            
        </DivOpcoes1>
    )
}