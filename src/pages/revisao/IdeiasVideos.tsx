import { DivVideoRevisao } from "../../styles"
import { RevisaoVideoProps } from "../../types"

export default function IdeiasVideos({imagem, conteudo, imagemCont1, imagemCont2, imagemCont3} : RevisaoVideoProps){
    return(
        <DivVideoRevisao>
            <img src={imagem} alt="" />
            <a href={conteudo}></a>
            <div className="container">
                <p>CONTEUDOS DO SUPORTE QUE PODEM TE AJUDAR </p>
                <div className="dicasVideo">
                    <img src={imagemCont1} alt="" />
                    <img src={imagemCont2} alt="" />
                    <img src={imagemCont3} alt="" />
                </div>
            </div>
        </DivVideoRevisao>
    )
}