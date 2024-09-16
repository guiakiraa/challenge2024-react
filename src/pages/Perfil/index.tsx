import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { DivFundoAzulClaro, MainPags } from "../../styles";
import AbaPerfil from "./AbaPerfil";

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