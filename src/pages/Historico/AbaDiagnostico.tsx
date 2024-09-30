import { DivDiagnosticoHistorico, DivHistorico } from "../../styles";
import { RegistroProps } from "../../types";
import AdicionarDiagnostico from "./AdicionarDiagnostico";
import CardRegistro from "./CardRegistro";

export default function AbaDiagnostico(){

    const historico:RegistroProps[] = [
        {
            data: '26 de fevereiro de 2024',
            preco: 250.0,
            marca: 'Fiat',
            modelo: 'UNO',
            ano: 2007,
            placa: 'RIO2A18',
            diagnostico: "Superaquecimento"
        },
        {
            data: '08 de outubro de 2024',
            preco: 600,
            marca: 'Fiat',
            modelo: 'UNO',
            ano: 2020,
            placa: "BRO8X09",
            diagnostico: "Problema no câmbio"
        },
        {
            data: '10 de setembro de 2024',
            preco: 500,
            marca: 'Fiat',
            modelo: 'UNO',
            ano: 2020,
            placa: "BRO8X09",
            diagnostico: "Problema nas Velas"
        }
    ]

    return(
        <DivHistorico>
            <h2>VEJA AGORA MESMO SEU HISTÓRICO!</h2>    
            <h3>Diagnóstico</h3>
            <DivDiagnosticoHistorico>
            {
                historico.map((reg, index) => (
                    <CardRegistro key={index} 
                        data={reg.data} 
                        preco={reg.preco} 
                        marca={reg.marca}  
                        modelo={reg.modelo}  
                        ano={reg.ano}
                        placa={reg.placa}
                        diagnostico={reg.diagnostico}
                    />
                ))
            }

                <AdicionarDiagnostico irPara="/diagnostico"/>
            </DivDiagnosticoHistorico>
        </DivHistorico>
    )
}