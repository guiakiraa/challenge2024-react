import styled from "styled-components";
import { DivBannerProps } from "./types";


export const HeaderCabecalho = styled.header`
    display: flex;
    flex-direction: column;
`

export const DivBanner = styled.div<DivBannerProps>`
    background-image: ${({ imagemFundo }) =>
        `linear-gradient(rgba(0, 89, 153, 0.384), rgba(0, 30, 51, 0.37)), url(${imagemFundo})`};
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;

    h1 {
        font-size: 50px;
        color: #fff;
    }

    p {
        font-size: 22px;
        color: #fff;
        opacity: 50%;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }
    }
`

export const NavMenu = styled.nav`
    background-color: #00345A;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-left: 20px;
        width: 100px;
    }

    ul {
        width: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
        }

        li {
            padding: 20px 0;
        }

        a {
            padding: 20px 40px;
            background-color: #00345A;
            text-decoration: none;
            font-size: 22px;
            color: white;
        }

        a:hover {
            background-color: #00456a;
        }

    }

    @media screen and (max-width: 768px) {
        ul {

            a {
                padding: 20px;
                font-size: 16px;
            }
        }
    }
`

export const MainPags = styled.main`
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MainHome = styled.main`
    display: flex;
    flex-direction: column;
`

export const MainForm = styled.main`
    background-color: #074c7e;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DivTituloEquipe = styled.div`
    margin-left: 100px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 30px;

    i {
        font-size: 35px;
    }

    h2 {
        color: #00345a;
        font-size: 35px;
    }
`

export const DivMembros = styled.div`
    background-color: #8DD1F1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
`

export const DivCardMembro = styled.div`
    height: 500px;
    width: 350px;
    border-radius: 12px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: 250px;
    }

    h3 {
        font-size: 25px;
        color: #00345A;
    }

    .container {
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;


        .social {
            display: flex;
            align-items: center;
            gap: 5px;

            i {
                font-size: 23px;
            }

            .fa-linkedin {
                color: #0e76a8;
            }
        }



        
        a {
            text-decoration: none;
            color: #00345A;
            font-size: 18px;
            font-weight: 600;
        }

        p {
            color: #00345A;
        }
    }

`

export const SecForm = styled.section`
    background-color: #074C7E;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    border-radius: 15px;
    padding: 50px 0;

    h2 {
        text-transform: uppercase;
        color: #fff;
        font-size: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        background-color: #074C7E;

        .linha-form {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .campo-texto {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .campo-check {
            align-self: flex-start;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
        }        

        label {
            color: white;
            display: block;
            font-size: 18px;
        }

        input {
            background-color: white;
            border: none;
            font-size: 16px;
        }

        #lembrarLogin {
            width: 20px;
            height: 20px;
        }

        button {
            margin: auto;
            text-align: center;
            background-color: #0066FF;
            font-weight: 700;
            font-size: 18px;
            padding: 10px 30px;
            border: none;
            cursor: pointer;
            color: white;
        }

        button:hover {
            background-color: #2211cc;
        }
    }
`

// HOME

export const DivOpcoes1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    .container{
        width: 100%;
        text-align: center;
        margin-bottom: 10vh;
    }

    h2{
        color: #2086DA; 
        font-size: 45px;
        margin: 10vh;
    }

    img{
        background-color: #8DD1F1;
        height: 200px;
        width: 200px;
        padding: 5px;
        margin: 5px;
        border-radius: 100px;
        margin-left: 80px;
        margin-right: 80px;
    }


`

export const DivAreaSelecao = styled.div`
    display: flex;
    background-color: #00345A;
    padding: 1em;
    align-items: center;


    button{
        display: flex;
        justify-content: center; /* Centraliza horizontalmente */
        align-items: center; /* Centraliza verticalmente */
        height: 20px;
        width: 25%;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 15px;
        margin-top: 10vh;
        color: white;
    }

    
    img{

        height: 300px;
        width: 300px;
        padding: 5px;
        margin: 5px;
        margin-left: 80px;
        margin-right: 80px;
    }
    .lado1{
        flex-direction: column;
        display: flex;
        color: white;
        text-align: right;
        align-items: center;
        padding-left: 30%;
        font-size: 35px;

    }

    strong{
        color: #8DD1F1;
    }
`

export const DivAreaSelecao2 = styled.div`
    display: flex;
    padding: 1em;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 3%;


    button{
        display: flex;
        justify-content: center;
        align-items: center; 
        height: 20px;
        width: 25%;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 15px;
        margin-top: 10vh;
        color: white;
    }

    
    img{
        background-color: #8DD1F1;
        height: 300px;
        width: 300px;
        padding: 30px;
        margin: 5px;
        border-radius: 150px;
        margin-left: 80px;
        margin-right: 80px;

    }
    .lado2{
        flex-direction: column;
        display: flex;
        color: #00345A;
        text-align: left;
        align-items: center;
        padding-right: 30%;
        font-size: 35px;

    }

    strong{
        color: #8DD1F1;
    }
`

// REVISÃO

export const DivInicioRevisao = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    margin-top: 10vh;
    h2{
        color: #2086DA;
        font-size: 40px;
        padding-left: 29vw;
        padding-right: 29vw;
        strong{
            color: #8DD1F1;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 15%;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 10vh;
        color: white;
    }
    button:hover{
            background-color: #0074FF;
            cursor: pointer;
        }

    a{
        margin: 10px;
        color: #00345A;
    }

`

export const DivVideoRevisao = styled.div`
    background-color: #8DD1F1;
    display: flex;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-right: 10vw;
    padding-left: 10vw;
    margin-top: 10vh;
    align-items: center;
    margin-bottom: 20vh;
    .container{
        text-align: center;
        color: #00345A;
        p{
            font-size: 20px;
            margin-bottom: 5vh;
        }
    }
    img{
        width: 13vw;
        height: 13vw;
        min-height: 150px;
        min-width: 150px;
    }

    .dicasVideo{
        width: 70vw;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding-left: 5vw;
        padding-right: 5vw;
        flex-wrap: wrap;
        img{
            width: 11vw;
            height: 11vw;
            margin: 10px;
            border-radius: 12px;
            
        }
        img:hover{
                cursor: pointer;
                opacity: 50%;
            }
    }

`

export const DialogInicial = styled.dialog`
.inicio::backdrop{ /*Quando está no show modal*/
    background-color: rgba(7, 9, 32, 0.8);
}

.inicio{
    background-color: #00345A;
    width: 50vw;
    height: 60vh;
    border: none;
    padding: 50px;
    border-radius: 10px;

    h2{
        color: white;
        text-align: center;
        font-size: 30px;
    }

    p{
        color: #8DD1F1;
        font-size: 25px;

    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dicasIniciais{
        display: flex;
        align-items: center;
        img{
            width: 20px;
            height: 20px;
            padding: 5px;
        }
    }

    .iniciar{
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 50%;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 10vh;
        color: white;
    }
}
`

export const DialogPerguntas = styled.dialog`
    background-color: #00345A;
    width: 50vw;
    height: 60vh;
    border: none;
    padding: 50px;
    border-radius: 10px;
    top: 20vh;
    left: 25vw;

    h2{
        color: white;
        text-align: center;
        font-size: 20px;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    p{
        margin-top: 5vh;
        color: #8DD1F1;
        font-size: 30px;
        text-align: center;
    }

    .resp{
        width: 100%;
        display: flex;
        justify-content: space-evenly;

    }
    .btn{
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 10vw;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 10vh;
        color: white;
    }
    ::backdrop {
    background-color: rgba(7, 9, 32, 0.8); /* Cor do backdrop com opacidade */
}
`

export const DialogResp = styled.dialog`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00345A;
    width: 50vw;
    height: 60vh;
    border: none;
    padding: 50px;
    border-radius: 10px;
    top: 20vh;
    left: 25vw;

    h2{
        color: white;
        text-align: center;
        font-size: 20px;
    }

    p{
        margin-top: 5vh;
        color: #8DD1F1;
        font-size: 30px;
        text-align: center;
    }

    .btn{
        display: flex;
        justify-content: center;
        width: 10vw;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 10vh;
        color: white;
        gap: 1;

    }

    .divBotao{
        display: flex;
        justify-content: center;
    }

    ul{
        color: white;
        font-size: 20px;
        margin-top: 10%;
    }


`
