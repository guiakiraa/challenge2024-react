import Cabecalho from "../../components/Cabecalho";
import IdeiasVideos from "./IdeiasVideos";
import InicioRevisao from "./InicioRevisao";

export default function Revisao(){
    return(
        <>
            <Cabecalho fundoUrl="/fundo_revisao.png" titulo="REVISÃO ASSISTIDA" paragrafo="Faça a revisão do seu automóvel agora mesmo"/>
            <InicioRevisao/>
            <IdeiasVideos imagem="../../public/ferramenta.png" conteudo="https://blog.portoseguro.com.br/aprenda-como-trocar-pneu-do-carro" imagemCont1="../../public/trocar_pneu.jpg" imagemCont2="../../public/trocar_oleo.jpg" imagemCont3="../../public/consertar_carro.jpg"></IdeiasVideos>
        </>
    )
}