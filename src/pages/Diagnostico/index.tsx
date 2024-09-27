import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Rodape from "../../components/Rodape";
import { MainDiagnostico, MainPags } from "../../styles";
import Chat from "./Chat";
import WatsonChat from "./WatsonChat";

export default function Diagnostico(){
    return(
        <>  
        <Menu/>
        <MainDiagnostico>
        <Chat></Chat>
        <WatsonChat></WatsonChat>
        </MainDiagnostico>
        <Rodape />
    </>
    )
}