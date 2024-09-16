import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { DivFundoAzulClaro, MainPags } from "../../styles";
import Duvidas from "./Duvidas";


export default function Ajuda() {

    return (
        <>
            <Cabecalho titulo = "Ajuda"/>
            <MainPags>
                 <Duvidas />
            </MainPags>
            <Rodape/>

        </>
    )
}