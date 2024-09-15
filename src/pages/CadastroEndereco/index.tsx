import Menu from "../../components/Menu";
import { MainForm } from "../../styles";
import FormularioEndereco from "./FormularioEndereco";


export default function CadastroEndereco() {

    return (
        <>
            <Menu />
            <MainForm>
                <FormularioEndereco />
            </MainForm>
        </>
    )
}