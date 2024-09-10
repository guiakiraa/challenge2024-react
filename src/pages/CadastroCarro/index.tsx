import FormularioCadastroCarro from "./FormularioCadastroCarro";
import Menu from "../../components/Menu";
import { MainForm } from "../../styles";


export default function CadastroCarro() {

    return (
        <>
            <Menu />
            <MainForm>
                <FormularioCadastroCarro />
            </MainForm>
        </>
    )
}