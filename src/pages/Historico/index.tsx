import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { MainPags, SecHistorico } from "../../styles";
import { RegistroProps } from "../../types";
import AbaDiagnostico from "./AbaDiagnostico";
import CabecalhoHistorico from "./CabecalhoHistorico";
import Registro from "./Registro";


export default function Historico() {



    return (
        <>
            <CabecalhoHistorico />
            <MainPags>
                <AbaDiagnostico/>
                <Rodape/>
            </MainPags>
        </>
    )
}