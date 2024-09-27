import { DivBannerRevisao } from "../../styles";
import { DivBannerProps } from "../../types";
import BotaoIniciar from "./BotaoIniciar";

export default function BannerRevisao({imagemFundo} : DivBannerProps){
    return(
        <DivBannerRevisao imagemFundo={imagemFundo}>
            <h1>REVISÃO ASSISTIDA</h1>
            <p>REVISE PARA ENCONTRAR POSSÍVEIS PROBLEMAS</p>
            <BotaoIniciar/>

        </DivBannerRevisao>
    )
}