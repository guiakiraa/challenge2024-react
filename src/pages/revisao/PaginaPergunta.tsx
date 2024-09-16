import { useEffect } from "react";
import { formRevisao } from "../../types";
import { DialogPerguntas } from "../../styles";

export default function PaginaPergunta({ orientacao, pergunta, onSim, onNao, btnSair, dialogRef } : formRevisao) {
    
    
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal(); 
        }
    }, []);
    return (
        <DialogPerguntas ref={dialogRef} className="forms" >
            <div className="container">
                <h2>{orientacao}</h2>
                <p>{pergunta}</p>
                <div className="resp">
                    <button id="sim" onClick={onSim} className="btn">SIM</button>
                    <button id="nao" onClick={onNao} className="btn">NÃO</button> 
                </div>
                <button id="sair" onClick={btnSair} className="btnSair">Sair</button> 
            </div>
        </DialogPerguntas>
    );
}
