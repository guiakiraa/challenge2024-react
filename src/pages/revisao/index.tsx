import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { MainPags } from "../../styles";
import CabecalhoRevisao from "./CabecalhoRevisao";
import Dica from "./Dica";
import IdeiasVideos from "./IdeiasVideos";
import InicioRevisao from "./InicioRevisao";
import LaudoRevisao from "./LaudoRevisao";

export default function Revisao(){
    return(
        <>
        <MainPags>
            <CabecalhoRevisao />
            <InicioRevisao/>
            <Dica/>
            <IdeiasVideos/>
            <Rodape></Rodape>
        
        </MainPags>
        </>
    )
}