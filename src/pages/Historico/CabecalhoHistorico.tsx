import Menu from "../../components/Menu";
import { DivHistoricoCabec } from "../../styles";
import { DivBannerProps } from "../../types";

export default function CabecalhoHistorico({imagemFundo} : DivBannerProps){
    imagemFundo = "../../public/fundoHistorico.png"
    return(
        <header>
            <Menu/>
            <DivHistoricoCabec imagemFundo = {imagemFundo}>
            <h1>HISTÓRICO</h1>
            <p>VEJA OS LAUDOS ANTERIORES DO SEU AUTOMÓVEL</p>
            </DivHistoricoCabec>
        </header>
    )
}