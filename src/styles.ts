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
