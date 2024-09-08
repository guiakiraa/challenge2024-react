import FormularioCadastroCarro from "../../components/FormularioCadastroCarro";
import Menu from "../../components/Menu";
import { MainGeral } from "../../styles";


export default function CadastroCarro() {

    return (
        <>
            <Menu />
            <MainGeral>
                <FormularioCadastroCarro />
            </MainGeral>
        </>
    )
}