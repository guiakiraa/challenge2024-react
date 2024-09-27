import { useEffect, useRef, useState } from "react";
import { DivInicioRevisao } from "../../styles";
import PaginaPergunta from "./PaginaPergunta";
import Resposta from "./Resposta";
import Confirmacao from "./Confirmacao";
import BotaoIniciar from "./BotaoIniciar";

export default function InicioRevisao() {
    return (
        <>
            <DivInicioRevisao>
                <img src="../../public/carroRevisao.png" alt="" />
                <div className="lado2">
                    <h2>O QUE É A <strong>REVISÃO ASSISTIDA?</strong></h2>
                    <p>A <strong>Revisão Assistida</strong> consiste em uma série de etapas que permitem que você mesmo realize um check-up completo no seu automóvel!</p>
                </div>
            </DivInicioRevisao>
        </>
    );
}
