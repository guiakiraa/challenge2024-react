import { useNavigate } from "react-router-dom";
import { DivBanner } from "../styles";
import { BannerProps, NavegarParaProps } from "../types";

export default function Banner({fundoUrl, titulo, paragrafo, textoBotao, irPara}: BannerProps&NavegarParaProps) {
    const navigate = useNavigate();
    const irParaPagina = () => {
        navigate(irPara)
    }
    return (
        <DivBanner imagemFundo={fundoUrl}>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
            <button onClick={irParaPagina}>{textoBotao}</button>
        </DivBanner>
    )
}