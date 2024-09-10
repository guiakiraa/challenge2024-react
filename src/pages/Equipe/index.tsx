import Cabecalho from "../../components/Cabecalho";
import CardMembro from "../../components/CardMembro";
import TituloEquipe from "../../components/TItuloEquipe";
import { DivMembros, MainGeral } from "../../styles";


export default function Equipe() {

    return (
        <>  
            <Cabecalho titulo="TRIA"/>
            <MainGeral>
                <TituloEquipe />
                <DivMembros>
                    <CardMembro foto="/anne.png" nome="Anne Rezendes" linkGithub="#" github="annerezendes" linkLinkedin="#" linkedin="Anne Rezendes" rm={55779} turma="1TDSPI" />
                    <CardMembro foto="/alice.png" nome="Alice Nunes" linkGithub="#" github="lice-santos" linkLinkedin="#" linkedin="Alice Nunes" rm={559052} turma="1TDSPI"/>
                    <CardMembro foto="/akira.png" nome="Guilherme Nakamatsu" linkGithub="#" linkLinkedin="#" linkedin="Guilherme Nakamatsu" github="guiakiraa" rm={556128} turma="1TDSPI" />
                </DivMembros>
            </MainGeral>
        </>
    )
}