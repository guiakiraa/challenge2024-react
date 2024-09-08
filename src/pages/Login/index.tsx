import FormularioEntrar from "../../components/FormularioEntrar";
import Menu from "../../components/Menu";
import { MainGeral } from "../../styles";

export default function Login() {

    return (
        <>
            <Menu />
            <MainGeral>
            <FormularioEntrar />
            </MainGeral>
        </>
    )
}