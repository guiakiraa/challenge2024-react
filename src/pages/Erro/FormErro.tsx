import { useNavigate } from 'react-router-dom';
import { ErroStyle } from "../../styles";
import { ErroProps } from "../../types";

export default function FormErro({imagem} : ErroProps){

    const navigate = useNavigate();
    const irParaHome = () => {
        navigate("/")
    }

    return(
        <>
        <ErroStyle>
            <img src={imagem} alt="" />
            <div className="lado2">
                <h1>Erro-404</h1>
                <p>OPS!</p>
                <p className="desc">Parece que a página não foi encontrada!</p>
                <p className="desc">Tente novamente mais tarde.</p>
                <button onClick={irParaHome}>IR PARA HOME</button>
            </div>
        </ErroStyle>
        </>
        
    )
}