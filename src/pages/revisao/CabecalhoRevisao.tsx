import Menu from "../../components/Menu";
import BannerRevisao from "./BannerRevisao";

export default function CabecalhoRevisao(){
    return(
        <header>
            <Menu />
            <BannerRevisao imagemFundo= "../../public/fundoRevisao.png"/>
        </header>
    )
}