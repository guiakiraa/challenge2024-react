import { useEffect } from "react";
import { DialogResp } from "../../styles";
import { RespostaProps } from "../../types";
import LaudoRevisao from "./LaudoRevisao";

export default function Resposta({ dialogRef, problemaProps, onClose }: RespostaProps) {
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, [dialogRef]);

    return (
        <DialogResp ref={dialogRef}>
            <div className="container">
                <img src="../../public/faseFimRevisao.png" alt="" />
                <h2>Revisão finalizada com sucesso!</h2>
                <p>Veja os problemas identificados:</p>
                <ul>
                    {problemaProps.map(prob => <li key={prob}>{prob}</li>)}
                </ul>
                <div className="divBotao">
                    <button className="btn" id="fechar" onClick={onClose}>Fechar</button> 
                </div>
                <LaudoRevisao problemaProps={problemaProps}></LaudoRevisao>
            </div>
        </DialogResp>
    );
}
