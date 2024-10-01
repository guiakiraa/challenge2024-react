import { DivCardHistorico } from "../../styles";
import { DiagnosticDtoProps, HistoricoProps } from "../../types";
import Diagnostico from "../Diagnostico";

export default function CardRegistro(props : HistoricoProps){
    return(
        <DivCardHistorico>
            <img src="../../public/diagnosticoHistorico.png" alt="" />
            <p><strong>Data:</strong> {props.data}</p>
            <p><strong>Diagnóstico:</strong> {props.diagnostico}</p>
            <p><strong>Placa:</strong> {props.placa}</p>
            <p><strong>Orçamento: </strong> R${props.orcamento}</p>
        </DivCardHistorico>
    )
}