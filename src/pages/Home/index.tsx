import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import {MainPags } from "../../styles";
import AreaSelecao4 from "./AreaSelecao4";
import AreaSelecao1 from "./AreaSelecao1";
import AreaSelecao2 from "./AreaSelecao2";
import AreaSelecao3 from "./AreaSelecao3";
import OpcoesHome1 from "./OpcoesHome1";
import AreaSelecao5 from "./AreaSelecao5";


export default function Home() {
    
    return (
        <>
            <Cabecalho fundoUrl="/principal.png" titulo="DIAGNÓSTICO" paragrafo="Descubra o problema do seu veículo" textoBotao="INICIAR DIAGNOSTICO"/>
            <MainPags>
            <OpcoesHome1 logo1="../../public/diagnostico.png" logo2="../../public/revisao.png" logo3="../../public/historico.png"></OpcoesHome1>
            <AreaSelecao1 imagem="../../public/mecanicoInicial.png" inicioConteudo="Aqui na " conteudoMarcado="TRIA" finalConteudo="Te ajudar é a nossa maior satisfação."  textoBotao="SAIBA MAIS SOBRE NÓS" irPara="/"/>      
            <AreaSelecao2 imagem="../../public/pranchetaAzul.png" inicioConteudo="NO " conteudoMarcado="DIAGNÓSTICO " finalConteudo="você descobre os problemas do seu veículo respondendo a algumas perguntas!" textoBotao= "" irPara="/diagnostico"/>
            <AreaSelecao3 imagem="../../public/revisaoInicial.png" texto="Descubra potenciais problemas fazendo a REVISÃO do seu automóvel"></AreaSelecao3>
            <AreaSelecao4 imagem="../../public/acharOficina.png" texto="Encontre as oficinas mais próximas de você!" textoBotao = "BUSCAR OFICINAS"></AreaSelecao4>
            <AreaSelecao5 imagem="../../public/historicoInicial.png" texto="Veja as revisões e diagnósticos feitos anteriormente!" textoBotao="VER HISTÓRICO" titulo="HISTÓRICO"></AreaSelecao5>
            <Rodape></Rodape>
            
            </MainPags>
        </>
    )
}