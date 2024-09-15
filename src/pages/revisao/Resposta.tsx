import React, { useEffect } from "react";
import { DialogResp } from "../../styles";
import { RespostaProps } from "../../types";

export default function Resposta({ dialogRef, problemaProps, onClose }: RespostaProps) {
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal(); // Exibe o diálogo quando o componente é montado
        }
    }, [dialogRef]);

    return (
        <DialogResp ref={dialogRef}>
            <div className="container">
                <h2>Revisão finalizada com sucesso!</h2>
                <p>Veja os problemas identificados:</p>
                <ul>
                    {problemaProps.map(prob => <li key={prob}>{prob}</li>)}
                </ul>
                <div className="divBotao">
                    <button className="btn" onClick={onClose}>Fechar</button> {/* Adiciona botão para fechar */}
                </div>
            </div>
        </DialogResp>
    );
}
