import FormularioCadastroUsuario from "./FormularioCadastroUsuario";
import Menu from "../../components/Menu";
import { MainForm } from "../../styles";

export default function CadastroUsuario() {

    return (
        <>
            <Menu />
            <MainForm>
                <FormularioCadastroUsuario />
            </MainForm>
        </>
    )
}