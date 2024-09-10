import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";
import { SecForm } from "../../styles";
import { Endereco, FormularioUsuarioProps } from "../../types";

export default function FormularioCadastroUsuario() {

    const [formState, setFormState] = useState<FormularioUsuarioProps>({
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        dtNascimento: "",
        telefone: "",
    });

    const navigate = useNavigate();

    const handleSubmit = useCallback(
        (evento: React.FormEvent<HTMLFormElement>) => {
            evento.preventDefault();

            const { email, senha } = formState;

            if (!email || !senha) {
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
            const { value, name, type, checked } = targetInput;

            const finalValue = type === "checkbox" ? checked : value

            setFormState({
                ...formState,
                [name]: finalValue,
            });

        },
        [formState]
    )

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState<Endereco | null>(null);
    const [error, setError] = useState('');

    // Função para buscar o endereço a partir do CEP
    const fetchAddress = async (cep: string) => {
        try {
            // Remove formatação do CEP
            const formattedCep = cep.replace(/\D/g, '');
            if (formattedCep.length !== 8) {
                setError('CEP inválido');
                setAddress(null);
                return;
            }

            // Chamando a API do ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${formattedCep}/json/`);
            const data = await response.json();

            // Verifica se o CEP é válido
            if (data.erro) {
                setError('CEP não encontrado');
                setAddress(null);
                return;
            }

            setError('');
            setAddress(data);
        } catch (error) {
            setError('Erro ao consultar o CEP');
            setAddress(null);
        }
    };

    // Função para lidar com a mudança no input do CEP
    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCep = event.target.value;
        setCep(newCep);

        // Chamando a função de busca com um pequeno atraso para evitar muitas chamadas
        if (newCep.length === 8) {
            fetchAddress(newCep);
        }
    };

    return (
        <SecForm>
            <h2>Cadastro Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className="linha-form">
                    <div className="campo-texto">
                        <label>Nome</label>
                        <input
                            type="nome"
                            id="nome"
                            name="nome"
                            required
                            value={formState.nome}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campo-texto">
                        <label>CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            required
                            value={formState.cpf}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="linha-form">
                    <div className="campo-texto">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campo-texto">
                        <label>Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            required
                            value={formState.senha}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="linha-form">
                    <div className="campo-texto">
                        <label>Data de Nascimento</label>
                        <input
                            type="text"
                            id="dtNascimento"
                            name="dtNascimento"
                            required
                            value={formState.dtNascimento}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campo-texto">
                        <label>Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            required
                            value={formState.telefone}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div>
                    <label>CEP</label>
                    <input
                        type="text"
                        value={cep}
                        onChange={handleCepChange}
                        maxLength={9}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label>Logradouro</label>
                    <input
                        type="text"
                        value={address?.logradouro || ''}
                        readOnly
                    />
                </div>
                <div>
                    <label>Bairro</label>
                    <input
                        type="text"
                        value={address?.bairro || ''}
                        readOnly
                    />
                </div>
                <div>
                    <label>Cidade</label>
                    <input
                        type="text"
                        value={address?.localidade || ''}
                        readOnly
                    />
                </div>
                <div>
                    <label>Estado</label>
                    <input
                        type="text"
                        value={address?.uf || ''}
                        readOnly
                    />
                </div>
                <button type="submit">
                    Enviar
                </button>
            </form>
        </SecForm>
    )
}