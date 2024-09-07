import { HeaderCabecalho } from "../styles";
import { BannerProps } from "../types";
import Banner from "./Banner";
import Menu from "./Menu";


export default function Cabecalho({fundoUrl, titulo, paragrafo}: BannerProps) {

    return (
        <HeaderCabecalho>
            <Banner  fundoUrl={fundoUrl} titulo={titulo} paragrafo={paragrafo} />
            <Menu />
        </HeaderCabecalho>
    )
}