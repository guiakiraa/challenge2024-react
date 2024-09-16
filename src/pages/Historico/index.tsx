import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { MainPags, SecHistorico } from "../../styles";
import { RegistroProps } from "../../types";
import Registro from "./Registro";


export default function Historico() {

    const historico:RegistroProps[] = [
        {
            data: '26 de fevereiro de 2024',
            preco: 250.0,
            carro: 'Fiat UNO',
            ano: 2007,
            placa: 'RIO2A18',
            diagnostico: "Superaquecimento"
        },
        {
            data: '08 de outubro de 2024',
            preco: 600,
            carro: "Ferrari",
            ano: 2020,
            placa: "BRO8X09",
            diagnostico: "Problema no câmbio"
        }
    ]

    return (
        <>
            <Cabecalho titulo="Histórico" />
            <MainPags>
                <SecHistorico>
                    <h2>todos registros</h2>
                    {
                        historico.map((reg, index) => (
                            <Registro key={index} 
                                data={reg.data} 
                                preco={reg.preco} 
                                carro={reg.carro}  
                                ano={reg.ano}
                                placa={reg.placa}
                                diagnostico={reg.diagnostico}
                            />
                        ))
                    }
                </SecHistorico>
                <Rodape/>
            </MainPags>
        </>
    )
}