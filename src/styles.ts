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
        text-transform:uppercase;
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
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export const MainHome = styled.main`
    display: flex;
    flex-direction: column;
`

export const MainForm = styled.main`
    flex-grow: 1;
    background-color: #00345A;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DivTituloEquipe = styled.div`
    margin-top: 50px;
    margin-left: 100px;
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

    @media screen and (max-width: 970px) {
        i {
        font-size: 28px;
    }

    h2 {
        font-size: 30px;
    }
    }
`

export const DivFundoAzulClaro = styled.div`
    background-color: #8DD1F1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;
    margin: 50px 0;

    @media screen and (max-width: 970px) {
        flex-direction: column;

        gap: 30px;
    }
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

    @media screen and (max-width: 1200px) {
        height: 425px;
        width: 300px;

        img {
            width: 210px;
        }

        h3 {
            font-size: 22px;
        }

        .container {
            width: 250px;

            i {
                font-size: 21px;
            }
        }

        a {
            font-size: 16px;
        }

        p {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 970px) {
        height: 350px;
        width: 265px;

        img {
            width: 160px;
        }

        h3 {
            font-size: 20px;
        }

        .container {
            width: 200px;

            i {
                font-size: 18px;
            }
        }

        a {
            font-size: 14px;
        }

        p {
            font-size: 14px;
        }
    }

`

export const SecFormLogin = styled.section`
    background-color: #074C7E;
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    align-self: center;
    gap: 50px;
    border-radius: 15px;
    padding: 50px 0;

    h2 {
        text-transform: uppercase;
        color: #fff;
        font-size: 40px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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

        .cadastrar {
            display: flex;
            align-items: center;
            gap: 5px;

            p {
                color: white;
            }

            a {
                color: #8DD1F1;
                text-decoration: none;
            }
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
            width: 17px;
            height: 17px;
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

export const SecFormCadastro = styled.section`
    background-color: #074C7E;
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    align-self: center;
    gap: 50px;
    border-radius: 15px;
    padding: 50px 0;

    h2 {
        text-transform: uppercase;
        color: #fff;
        font-size: 40px;
        text-align: center;
        width: 50%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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

        .cadastrar {
            display: flex;
            align-items: center;
            gap: 5px;

            p {
                color: white;
            }

            a {
                color: #8DD1F1;
                text-decoration: none;
            }
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

        .status {
            align-self: center;
            display: flex;
            align-items: center;

            i {
                font-size: 30px;
            }

            .fa-minus {
                color: white;
            }

            #agora {
                color: #0094FF;
            }

            #falta {
                color: white;
            }
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