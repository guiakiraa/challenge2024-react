import Cabecalho from "../../components/Cabecalho";
import CardMembro from "./CardMembro";
import TituloEquipe from "./TItuloEquipe";
import { DivMembros, MainPags } from "../../styles";


export default function Equipe() {

    return (
        <>  
            <Cabecalho titulo="TRIA"/>
            <MainPags>
                <TituloEquipe />
                <DivMembros>
                    <CardMembro foto="/anne.png" nome="Anne Rezendes" linkGithub="#" github="annerezendes" linkLinkedin="#" linkedin="Anne Rezendes" rm={55779} turma="1TDSPI" />
                    <CardMembro foto="/alice.png" nome="Alice Nunes" linkGithub="#" github="lice-santos" linkLinkedin="#" linkedin="Alice Nunes" rm={559052} turma="1TDSPI"/>
                    <CardMembro foto="/akira.png" nome="Guilherme Nakamatsu" linkGithub="#" linkLinkedin="#" linkedin="Guilherme Nakamatsu" github="guiakiraa" rm={556128} turma="1TDSPI" />
                </DivMembros>
            </MainPags>
        </>
    )
}