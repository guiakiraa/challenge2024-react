export type BannerProps = {
    fundoUrl?: string;
    titulo: string;
    paragrafo?: string;
    textoBotao: string;
}

export type DivBannerProps = {
    imagemFundo: string;
}

export type CardMembroProps = {
    foto: string;
    nome: string;
    linkGithub: string;
    github: string;
    linkLinkedin: string;
    linkedin: string;
    rm: number;
    turma: string;
}

export type FormularioProps = {
    email: string;
    senha: string;
    lembrarLogin: boolean;
}

export type FormularioUsuarioProps = {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    dtNascimento: string;
    telefone: string;
}

export type Endereco = {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }

export type FormularioCarroProps = {
    placa: string;
    marca: string;
    modelo: string;
    ano: number;
    quilometragem: number;
}

export type DiagnosticDtoProps = {
    marca: string;
    modelo: string;
    ano: number;
    diagnostico: string;
    orcamento_previsto: number;
    preco_peca: number;
    session_id: string;
    timestamp: number; 
    placa: string;
}

export type HistoricoProps = {
    carro: string;
    ano: number;
    diagnostico: string;
    orcamento: string;
    data: string;
    placa: string;
}

// TYPES HOME

export type OpcoesPrincipalProps = {
    logo1: string;
    logo2: string;
    logo3: string;
}

export type AreaSelecaoProps = {
    inicioConteudo: string;
    conteudoMarcado: string;
    finalConteudo: string;
    imagem: string;
    textoBotao: string;
    irPara: string;
}

export type AreaSelecao3Props = {
    imagem: string;
    texto: string;
}
export type AreaSelecao4Props = {
    imagem: string;
    texto: string;
    textoBotao: string;
}
export type AreaSelecao5Props = {
    titulo: string;
    imagem: string;
    texto: string;
    textoBotao: string;
}

export type RevisaoVideoProps = {
    imagemVideo:string;
    descricao:string;
}

export type formRevisao = {
    orientacao: string;
    pergunta: string;
    onSim: () => void;       
    onNao: () => void;       
    btnSair: () => void;       
    dialogRef: React.RefObject<HTMLDialogElement>;
}

export type RespostaProps = {
    dialogRef: React.RefObject<HTMLDialogElement>;
    problemaProps: string[];
    onClose: () => void;
}

export type ExplicacaoProps={
    imagem:string;
}

export type ConfirmacaoProps ={
    dialogRef: React.RefObject<HTMLDialogElement>;
    onConfirm: (confirmou: boolean) => void;
}
export type ErroProps ={
    imagem: string;
}

export type NavegarParaProps = {
    irPara: string;
}