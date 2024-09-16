import carro from "../../../public/carro.png"
import { DivRegistro } from "../../styles"
import { RegistroProps } from "../../types"

export default function Registro(props: RegistroProps) {

    return (
        <DivRegistro>
            <header>
                <div>
                    <h3>Pedido Realizado</h3>
                    <p>{props.data}</p>
                </div>
                <div>
                    <h3>Total</h3>
                    <p>R${props.preco}</p>
                </div>
                <div>
                    <h3>Carro</h3>
                    <p>{props.carro}</p>
                </div>
            </header>
            <main>
                <img src={carro} alt="Imagem Ilustrativa de um carro" />
                <div className="infos">
                    <div>
                        <h4>Carro</h4>
                        <p>{props.carro}</p>
                    </div>
                    <div>
                        <h4>Ano</h4>
                        <p>{props.ano}</p>
                    </div>
                    <div>
                        <h4>Placa</h4>
                        <p>{props.placa}</p>
                    </div>
                </div>
                <div className="diagnostico">
                    <h4>Diagnóstico</h4>
                    <p>{props.diagnostico}</p>
                </div>
            </main>
        </DivRegistro>
    )
}