import { DivCardHistorico } from "../../styles";
import Diagnostico from "../Diagnostico";

type DiagnosticoVeiculo = {
    data: string;
    preco: number; 
    marca: string;
    modelo: string;  
    ano: number;
    placa: string;
    diagnostico:string;
}

export default function CardRegistro(props : DiagnosticoVeiculo){
    return(
        <DivCardHistorico>
            <img src="../../public/diagnosticoHistorico.png" alt="" />
            <p><strong>Data:</strong> {props.data}</p>
            <p><strong>Diagnóstico:</strong> {props.diagnostico}</p>
            <p><strong>Placa:</strong> {props.placa}</p>
            <p><strong>Valor total:</strong> {props.data}</p>
        </DivCardHistorico>
    )
}