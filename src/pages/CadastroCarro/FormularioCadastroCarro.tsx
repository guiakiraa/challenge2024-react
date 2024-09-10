import { useNavigate } from "react-router-dom";
import { SecForm } from "../../styles";
import { FormularioCarroProps } from "../../types";
import { useCallback, useState } from "react";


export default function FormularioCadastroCarro() {

    const [formState, setFormState] = useState<FormularioCarroProps>({
        placa: "",
        marca: "",
        modelo: "",
        ano: NaN,
        quilometragem: NaN
    });

    const navigate = useNavigate();

    const handleSubmit = useCallback(
        (evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault();

            const {placa, marca, modelo, ano, quilometragem} = formState;

            if (!placa || !marca || !modelo || !ano || !quilometragem){
                window.alert("Preencha todos so campos")
                return;
            }

            navigate('/')
        },
        [formState]
    );

    const handleChangeInput = useCallback(
        (evento: React.FormEvent<HTMLInputElement>) => {

            const targetInput = evento.currentTarget;
            const {value, name, type, checked} = targetInput;

            const finalValue = type === "checkbox" ? checked: value

            setFormState({
                ...formState,
                [name]: finalValue,
            });

        },
        [formState]
    )

    return (
        <SecForm>
            <h2>Cadastro Carro</h2>
            <form onSubmit={handleSubmit}>
                <div className="campo-texto">
                    <label>Placa</label>
                    <input
                        type="text" 
                        id="placa"
                        name="placa"
                        required
                        value={formState.placa}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Marca</label>
                    <input
                        type="text" 
                        id="marca"
                        name="marca"
                        required
                        value={formState.marca}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Modelo</label>
                    <input
                        type="text" 
                        id="modelo"
                        name="modelo"
                        required
                        value={formState.modelo}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Ano</label>
                    <input
                        type="number" 
                        id="ano"
                        name="ano"
                        required
                        value={formState.ano}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <div className="campo-texto">
                    <label>Quilometragem</label>
                    <input
                        type="number" 
                        id="quilometragem"
                        name="quilometragem"
                        required
                        value={formState.quilometragem}
                        onChange={handleChangeInput}
                    /> 
                </div>
                <button type="submit">
                    Enviar
                </button>
            </form>
        </SecForm>
    )
}