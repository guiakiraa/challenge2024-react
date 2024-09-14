export type BannerProps = {
    fundoUrl?: string;
    titulo: string;
    paragrafo?: string;
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

export interface PerfilProps {
    nome: string;
    email: string;
    fotoUrl: string;
    onNomeChange: (nome: string) => void;
    onEmailChange: (email: string) => void;
  }
  
  export interface ButtonProps {
    onClick: () => void;
  }
  
  export interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }