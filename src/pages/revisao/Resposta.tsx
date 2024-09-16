import { useEffect } from "react";
import { DialogResp } from "../../styles";
import { RespostaProps } from "../../types";

export default function Resposta({ dialogRef, problemaProps, onClose }: RespostaProps) {
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
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
                    <button className="btn" onClick={onClose}>Fechar</button> 
                </div>
            </div>
        </DialogResp>
    );
}
