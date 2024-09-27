import { DivCardVideo } from "../../styles";
import { RevisaoVideoProps } from "../../types";

export default function CardVideo({imagemVideo, descricao} : RevisaoVideoProps){
    return(
        <DivCardVideo>
            <img src={imagemVideo} alt="" />
            <p>{descricao}</p>
            <button>ASSISTIR</button>
        </DivCardVideo>
    )
}