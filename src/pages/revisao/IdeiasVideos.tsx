import { DivVideoRevisao } from "../../styles"
import { RevisaoVideoProps } from "../../types"
import CardVideo from "./CardVideo"

export default function IdeiasVideos(){
    return(
        <DivVideoRevisao>
                <p>Veja alguns vídeos para revisar seu automóvel</p>

                <div className="videos">
                    <CardVideo descricao="Teste o acelerador do seu veículo agora!" imagemVideo="../../public/vAcelerador.png"></CardVideo>
                    <CardVideo descricao="Teste o acelerador do seu veículo agora!" imagemVideo="../../public/vAcelerador.png"></CardVideo>
                    <CardVideo descricao="Teste o acelerador do seu veículo agora!" imagemVideo="../../public/vAcelerador.png"></CardVideo>
                </div>
        </DivVideoRevisao>
    )
}