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
            dialogRef.current.showModal(); // Exibe o diálogo quando necessário
        }
    }, [mostrarPergunta, indicePergunta]); // Atualiza sempre que `mostrarPergunta` ou `indicePergunta` mudar

    useEffect(() => {
        if (mostrarResultado && dialogRef.current) {
            dialogRef.current.showModal(); // Exibe o diálogo de resultado quando necessário
        }
    }, [mostrarResultado]);

    const iniciarRevisao = () => {
        setMostrarPergunta(true); // Exibe a primeira pergunta
    };

    const btnSim = () => {
        setProblemas([...problemas, perguntas[indicePergunta].tipoProblema]); // Armazena o problema identificado
        if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(indicePergunta + 1); // Passa para a próxima pergunta
        } else {
            finalizarRevisao(); // Finaliza a revisão
        }
    };

    const btnNao = () => {
        if (indicePergunta < perguntas.length - 1) {
            setIndicePergunta(indicePergunta + 1); // Passa para a próxima pergunta
        } else {
            finalizarRevisao(); // Finaliza a revisão
        }
    };

    const finalizarRevisao = () => {
        setMostrarPergunta(false);
        setMostrarResultado(true); // Mostra o resultado final
    };

    const fecharResultado = () => {
        setProblemas([]);
        setIndicePergunta(0);
        setMostrarResultado(false); // Esconde o resultado final
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
                    onSim={btnSim}  // Passa para a próxima pergunta ao clicar "Sim"
                    onNao={btnNao}  // Passa para a próxima pergunta ao clicar "Não"
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
