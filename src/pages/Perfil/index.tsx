import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { DivFundoAzulClaro, MainPags } from "../../styles";
import AbaPerfil from "./Abaperfil";

export default function Perfil() {

    return (
        <>  
            <Cabecalho titulo="Perfil" />
            <MainPags>
                <AbaPerfil>
                    
                </AbaPerfil>
            </MainPags>
            <Rodape />
        </>
    )
}