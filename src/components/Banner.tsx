import { DivBanner } from "../styles";
import { BannerProps } from "../types";

export default function Banner({fundoUrl, titulo, paragrafo}: BannerProps) {

    return (
        <DivBanner imagemFundo={fundoUrl}>
            <h1>{titulo}</h1>
            <p>{paragrafo}</p>
        </DivBanner>
    )
}