import { DivDicaRevisao } from "../../styles";

export default function Dica(){
    return(
        <DivDicaRevisao>
            <h3>PARA FAZER A REVISÃO É SUPER SIMPLES:</h3>
            <div className="container">
                <div className="topicos">
                    <p className="topico"><span>1</span>Esteja perto do seu veículo</p>
                    <p className="topico"><span>2</span>Inicie o passo a passo</p>
                    <p className="topico"><span>3</span>Responda todas as perguntas que aparecerem na tela</p>
                    <p className="topico"><span>4</span>Veja seu resultado!</p>
                </div>
                <img src="../../public/maoSegurando.png" alt="" />
            </div>
        </DivDicaRevisao>
    )
}