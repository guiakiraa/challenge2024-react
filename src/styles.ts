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
    @media screen and (max-width: 1080px) {
        h2{
            font-size: 40px;
        }
        img{
            height: 150px;
            width: 150px;
            margin-left: 30px;
            margin-right: 30px;
        }
    }
    @media screen and (max-width: 850px) {
        h2{
            font-size: 35px;
        }
        img{
            height: 100px;
            width: 100px;
            margin-left: 20px;
            margin-right: 20px;
        }
    }

`

export const DivAreaSelecao = styled.div`
    display: flex;
    background-color: #00345A;
    padding: 1em;
    align-items: center;


    button{
        display: flex;
        justify-content: center; 
        align-items: center; 
        height: 20px;
        width: 20vw;
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
        font-size: 30px;

    }

    strong{
        color: #8DD1F1;
    }

    @media screen and (max-width: 1080px) {
        .lado1{
            padding-left: 10%;
        }
        h3 {
            font-size: 25px;
        }

        img{
            height: 250px;
            width: 250px;
            margin-left: 25px;
            margin-right: 25px;
        }
    }

    @media screen and (max-width: 850px) {
        .lado1{
            padding-left: 8%;
        }
        h3 {
            font-size: 20px;
        }

        p {
            font-size: 10px;
        }

        img{
            height: 200px;
            width: 200px;
            margin-left: 20px;
            margin-right: 20px;
        }
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
        width: 20vw;
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
        font-size: 30px;

    }

    strong{
        color: #8DD1F1;
    }

    @media screen and (max-width: 1080px) {
        .lado2{
            padding-right: 10%;
        }
        h3 {
            font-size: 25px;
        }

        img{
            height: 250px;
            width: 250px;
            margin-left: 25px;
            margin-right: 25px;
        }
    }

    @media screen and (max-width: 850px) {
        .lado2{
            padding-right: 8%;
        }
        h3 {
            font-size: 20px;
        }

        p {
            font-size: 10px;
        }

        img{
            height: 200px;
            width: 200px;
            margin-left: 20px;
            margin-right: 20px;
        }
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
        width: 250px;
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
        font-size: 15px;
    }

    @media screen and (max-width: 1200px) {
        h2 {        
            padding-left: 23vw;
            padding-right: 23vw;
        }

    }
    @media screen and (max-width: 1080px) {
        h2 {
            font-size: 28px;
        }

        button{
            width: 220px;
            padding: 15px;
            margin-top: 6vh;
        }
        a{
            font-size: 10px;
            margin: 7px;
        }
    }
    @media screen and (max-width: 780px) {
        h2 {
            font-size: 28px;
            padding-left: 15vw;
            padding-right: 15vw;
        }

        button{
            width: 200px;
            padding: 15px;
            margin-top: 6vh;
        }
        a{
            font-size: 10px;
            margin: 7px;
        }
    }

`

export const DivVideoRevisao = styled.div`
    background-color: #8DD1F1;
    display: flex;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-right: 8px;
    padding-left: 8px;
    justify-content: center;
    margin-top: 10vh;
    align-items: center;
    margin-bottom: 20vh;
    .container{
        text-align: center;
        p{
            font-size: 20px;
            margin-bottom: 5vh;
        }
    }
    
    img{
        width: 180px;
        height: 180px;

    }

    .dicasVideo{
        width: 70vw;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding-left: 70px;
        padding-right: 70px;
        flex-wrap: wrap;
        img{
            width: 180px;
            height: 180px;
            margin: 10px;
            border-radius: 12px;
            
        }
        img:hover{
                cursor: pointer;
                opacity: 50%;
            }
    }

    @media screen and (max-width: 1080px) {

        .container p{
            font-size: 18px;
            margin-bottom: 5vh;
        }

        img{
        width: 140px;
        height: 140px;
        }
        .dicasVideo{
        width: 80vw;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding-left: 3vw;
        padding-right: 5vw;
        flex-wrap: wrap;

        img{
            width: 150px;
            height: 150px;
            margin: 8px;
            border-radius: 12px;
            
        }
    }
    }

    @media screen and (max-width: 780px) {

        .container p{
            font-size: 13px;
            margin-bottom: 3vh;
            padding: 1px;
        }

        img{
        width: 120px;
        height: 120px;
        }
        .dicasVideo{
            width: 80vw;
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            img{
                width: 100px;
                height: 100px;
                border-radius: 12px;
                
            }
        }
    }

`

export const DialogPerguntas = styled.dialog`
    background-color: #00345A;
    width: 60vw;
    height: 60vh;
    border: none;
    padding: 50px;
    border-radius: 10px;
    margin-top: 20vh;
    margin-left: 20vw;
    margin-right: 20vw;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);


    h2{
        color: white;
        text-align: center;
        font-size: 20px;
    }
    .btnSair{
        color: #8DD1F1;
        background-color: #00345A;
        border: none;
        font-size: 15px;
        margin-top: 5vh;
    }
    .btnSair:hover{
        color: white;
        cursor: pointer;
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
        width: 200px;
        height: 70px;
        padding: 7px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 70px;
        color: white;
        font-size: 15px;
    }

    .btn:hover{
        background-color: #0064FF;
        cursor: pointer;
    }
    @media screen and (max-width: 1080px) {

    padding: 40px;

    h2{
        color: white;
        text-align: center;
        font-size: 18px;
    }

    p{
        margin-top: 3vh;
        color: #8DD1F1;
        font-size: 25px;
        text-align: center;
    }

    .btn{
        width: 150px;
        height: 68px;
        padding: 6px;
        margin-top: 65px;
        font-size: 12px;

    }

    
}

@media screen and (max-width: 780px) {

    padding: 30px;

    h2{
        color: white;
        text-align: center;
        font-size: 15px;
    }

    p{
        margin-top: 3vh;
        color: #8DD1F1;
        font-size: 20px;
        text-align: center;
    }

    .btn{
        width: 120px;
        height: 53px;
        padding: 5px;
        margin-top: 60px;
        font-size: 10px;

    }
}
`

export const DialogResp = styled.dialog`

    display: flex;
    flex-direction: column;
    background-color: #00345A;
    width: 60vw;
    height: 60vh;
    border: none;
    padding: 40px;
    border-radius: 10px;
    margin-top: 20vh;
    margin-left: 20vw;
    margin-right: 20vw;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    .btn:hover{
        background-color: #0064FF;
        cursor: pointer;
    }

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
        align-items: center;
        width: 170px;
        height: 70px;
        padding: 20px;
        background-color: #0094FF;
        border-radius: 10px;
        margin-top: 50px;
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
        margin-top: 60px;
        margin-left: 10%;
    }

    @media screen and (max-width: 1080px) {
        padding: 40px;
        h2{
        font-size: 15px;
        }

        p{
            margin-top: 4vh;
            font-size: 25px;
        }

        .btn{
            width: 150px;
            height: 60px;
            padding: 6px;
            margin-top: 45px;
            font-size: 12px;
            align-items: center;

        }

        ul{
            font-size: 18px;
            margin-top: 55px;
        }
}
    @media screen and (max-width: 780px) {

        h2{
        font-size: 12px;
        }

        p{
            margin-top: 3vh;
            font-size: 22px;
        }

        .btn{
            width: 120px;
            height: 50px;
            padding: 5px;
            margin-top: 40px;
            font-size: 10px;
            align-items: center;

        }

        ul{
            color: white;
            font-size: 16px;
            margin-top: 50px;
        }
}
`

export const DialogConfirmacao = styled.dialog`

    display: flex;
    flex-direction: column;
    background-color: white;
    border: #00345A 2px solid;
    border-radius: 10px;
    margin-top: 42vh;
    width: 500px;
    height: 180px;
    margin-left: 30vw;


    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    .p1{
        text-align: left;
        color: white;
        background-color: #00345A;
        font-size: 20px;
        padding: 17px;
    }
    p{
        padding: 20px;
        font-size: 15px;
        text-align: left;
    }

    .btn{
            width: 60px;
            height: 25px;
            font-size: 8px;
            margin: 5px;
            border: 1px solid;
            border-radius: 5px;
        }

    .btn:hover{
        cursor: pointer;
    }

    #bSim{
            background-color: #8DD1F1;;
        }
    
    #bNao{
            background-color: #b5b5b5;
        }

    .resp{
        display: flex;
        border-top: #00345A solid 1px;
        justify-content: right;
        padding: 10px;
    }

    @media screen and (max-width: 1080px) {
        width: 450px;
        height: 160px;
        margin-left: 25vw;
    .p1{
        font-size: 16px;
        padding: 15px;
    }
    p{
        padding: 16px;
        font-size: 13px;
    }

    .btn{
            width: 50px;
            height: 20px;
            font-size: 7px;
            margin: 4px;
    

        }

        .resp{
        padding: 8px;
    }

    }

    @media screen and (max-width: 780px) {
        width: 380px;
        height: 120px;
        margin-left: 15vw;
    .p1{
        font-size: 12px;
        padding: 13px;
    }
    p{
        padding: 14px;
        font-size: 11px;
    }

    .btn{
            width: 40px;
            height: 15px;
            font-size: 6px;
            margin: 3px;
    

        }

        .resp{
        padding: 6px;
    }
        
    }

`