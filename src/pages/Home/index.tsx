import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { FooterRodape, MainPags } from "../../styles";
import AreaSelecao1 from "./AreaSelecao1";
import AreaSelecao2 from "./AreaSelecao2";
import OpcoesHome1 from "./OpcoesHome1";


export default function Home() {
    
    return (
        <>
            <Cabecalho fundoUrl="/fundo_principal.png" titulo="SEJA BEM-VINDO!" paragrafo="Trilhando o futuro com você em cada curva"/>
            <MainPags>
            <OpcoesHome1 logo1="../../public/ferramenta.png" logo2="../../public/maos_dadas.png" logo3="../../public/historico.png"></OpcoesHome1>
            <AreaSelecao1 imagem="../../public/prancheta.png" inicioConteudo="Faça o " conteudoMarcado="diagnóstico " finalConteudo="do seu veículo com a ajuda do nosso Bot"  textoBotao="FAZER DIAGNÓSTICO"/>      
            <AreaSelecao2 imagem="../../public/ferramenta.png" inicioConteudo="Faça uma " conteudoMarcado="revisão " finalConteudo="no seu carro para achar possíveis problemas"  textoBotao="REVISAR AUTOMOVEL"/>
            <AreaSelecao1 imagem="../../public/caderno.png" inicioConteudo="Veja os laudos dos " conteudoMarcado="diagnósticos e revisões " finalConteudo="feitos anterioemente"  textoBotao="VER HISTÓRICO"/>      
            <Rodape></Rodape>
            
            </MainPags>
        </>
    )
}