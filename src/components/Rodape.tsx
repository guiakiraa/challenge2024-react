import { FooterRodape } from "../styles";
import fiap from "../../public/fiap.png"
import porto from "../../public/porto.png"
import oxigenio from "../../public/oxigenio.png"
import ajuda from "../../public/duvida.png"
import { Link } from "react-router-dom";


export default function Rodape() {

    return (
        <FooterRodape>
            <div className="parcerias">
                <img src={fiap} alt="Logo FIAP" />
                <img src={porto} alt="Logo Porto Seguro" />
                <img src={oxigenio} alt="Logo Oxigênio Aceleradora" />
            </div>
            <p>triaduvidas@gmail.com</p>
            <div className="ajuda">
                <Link to={""}><img src={ajuda} alt="" /></Link>
                <p>Ajuda</p>
            </div>
        </FooterRodape>
    )
}