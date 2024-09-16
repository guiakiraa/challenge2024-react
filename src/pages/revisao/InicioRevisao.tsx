import { useEffect, useRef, useState } from "react";
import { DivInicioRevisao } from "../../styles";
import PaginaPergunta from "./PaginaPergunta";
import Resposta from "./Resposta";

export default function InicioRevisao() {
    const [indicePergunta, setIndicePergunta] = useState(0); // Controle do índice da pergunta atual
    const [mostrarPergunta, setMostrarPergunta] = useState(false);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [problemas, setProblemas] = useState<string[]>([]); // Armazena os problemas identificados
    const dialogRef = useRef<HTMLDialogElement>(null); // Referência para o diálogo

    // Array com as perguntas
    const perguntas = [
        { orientacao: "1. Segure o acelerador do veículo.", pergunta: "Ele apresentou algum ruído?", tipoProblema: "Ruído ao acelerar" },
        { orientacao: "2. Ligue as palhetas do limpador de para-brisa.", pergunta: "Apresentou algum trepidação ou ruído estranho?", tipoProblema: "Ruído nas palhetas" }
    ];

    useEffect(() => {
        if (mostrarPergunta && dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, [mostrarPergunta, indicePergunta]); 

    useEffect(() => {
        if (mostrarResultado && dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, [mostrarResultado]);

    const iniciarRevisao = () => {
        setMostrarPergunta(true); 
    };

    const btnSim = () => {
        setProblemas([...problemas, perguntas[indicePergunta].tipoProblema]); 
        if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(indicePergunta + 1); 
        } else {
            finalizarRevisao(); 
        }
    };

    const btnNao = () => {
        if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(indicePergunta + 1); 
        } else {
            finalizarRevisao(); 
        }
    };

    const finalizarRevisao = () => {
        setMostrarPergunta(false);
        setMostrarResultado(true); 
    };

    const fecharResultado = () => {
        setProblemas([]);
        setIndicePergunta(0);
        setMostrarResultado(false); 
    };

    return (
        <>
            <DivInicioRevisao>
                <h2>Faça agora mesmo a <strong>Revisão Assistida</strong> do seu veículo</h2>
                <button id="iniciar" onClick={iniciarRevisao}>INICIAR REVISÃO</button>
                <a href="">O que é a Revisão Assistida?</a>
            </DivInicioRevisao>
            {mostrarPergunta && (
                <PaginaPergunta
                    dialogRef={dialogRef}
                    orientacao={perguntas[indicePergunta].orientacao}
                    pergunta={perguntas[indicePergunta].pergunta}
                    onSim={btnSim}  
                    onNao={btnNao}
                />
            )}
            {mostrarResultado && (
                <Resposta 
                    dialogRef={dialogRef} 
                    problemaProps={problemas}
                    onClose={fecharResultado} // Passa a função de fechar para o Resposta
                />
            )}
        </>
    );
}
