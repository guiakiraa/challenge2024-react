import { HeaderCabecalho } from "../styles";
import { BannerProps } from "../types";
import Banner from "./Banner";
import Menu from "./Menu";


export default function Cabecalho({fundoUrl, titulo, paragrafo, textoBotao}: BannerProps) {

    return (
        <HeaderCabecalho>
            <Menu />
            <Banner  fundoUrl={fundoUrl} titulo={titulo} paragrafo={paragrafo} textoBotao={textoBotao}/>

        </HeaderCabecalho>
    )
}