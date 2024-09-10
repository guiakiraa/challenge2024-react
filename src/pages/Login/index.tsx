import FormularioEntrar from './FormularioEntrar'
import Menu from "../../components/Menu";
import { MainForm } from "../../styles";

export default function Login() {

    return (
        <>
            <Menu />
            <MainForm>
                <FormularioEntrar />
            </MainForm>
        </>
    )
}