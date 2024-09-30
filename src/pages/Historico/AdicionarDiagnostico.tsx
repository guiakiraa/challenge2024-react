import { useNavigate } from "react-router-dom";
import { DivAdicionarDiagnostico } from "../../styles";
import { NavegarParaProps } from "../../types";

export default function AdicionarDiagnostico({irPara} : NavegarParaProps){
    const navigate = useNavigate();
    const irParaPagina = () => {
        navigate(irPara)
    }
    return(
        <DivAdicionarDiagnostico onClick={irParaPagina}>
            +
        </DivAdicionarDiagnostico>
    )
}