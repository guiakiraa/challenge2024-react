import FormularioCadastroUsuario from "../../components/FormularioCadastroUsuario";
import Menu from "../../components/Menu";
import { MainGeral } from "../../styles";

export default function CadastroUsuario() {

    return (
        <>
            <Menu />
            <MainGeral>
                <FormularioCadastroUsuario />
            </MainGeral>
        </>
    )
}