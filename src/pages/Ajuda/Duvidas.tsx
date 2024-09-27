import { SecAjuda } from "../../styles";

export default function Duvidas(){
    return(
        <SecAjuda>
            <h1> DÚVIDAS FREQUENTES</h1>
            <h2>O que fazer se eu esquecer minha senha ou tiver problemas para fazer login na plataforma?</h2>
            <p>Clique em “Esqueci minha senha” e será enviado um email solicitando a alteração da senha.</p>
            <h2>Como posso verificar o histórico de serviços do meu carro?</h2>
            <p>Clique em “Histórico de Registros”.</p>
            <h2>Como posso avaliar ou deixar um comentário sobre um prestador de serviços ou oficina?</h2>
            <p>Nossa palataforma não está ligada direatemnte com a mecânica. Procure se informar na própria oficina.</p>
            <h3>Sua dúvida não está aqui? Clique no botão abaixo e fale com um atendente!</h3>
            <a target="blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!">FALE COM UM ATENDENTE</a>
      </SecAjuda>
    )
}