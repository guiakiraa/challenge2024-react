import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { MainDiagnostico, MainPags } from "../../styles";
import Chat from "./Chat";
import WatsonChat from "./WatsonChat";

export default function Diagnostico(){
    return(
        <>  
        <Cabecalho fundoUrl="/fundo_principal.png" titulo="DIAGNÓSTICO" paragrafo="Faça o diagnóstico do seu veículo"/>
        <MainDiagnostico>
        <Chat></Chat>
        <WatsonChat></WatsonChat>
        </MainDiagnostico>
        <Rodape />
    </>
    )
}