export type BannerProps = {
    fundoUrl: string;
    titulo: string;
    paragrafo: string;
}

export type DivBannerProps = {
    imagemFundo: string;
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