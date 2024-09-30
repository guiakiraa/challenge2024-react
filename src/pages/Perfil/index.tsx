import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Rodape from "../../components/Rodape";
import { DivFundoAzulClaro, MainPags } from "../../styles";
import AbaPerfil from "./AbaPerfil";

export default function Perfil() {

    return (
        <>  
            <Menu/>
            <MainPags>
                <AbaPerfil> 
                </AbaPerfil>
            </MainPags>
            <Rodape />
        </>
    )
}