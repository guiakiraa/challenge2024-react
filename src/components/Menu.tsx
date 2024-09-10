import { NavMenu } from "../styles";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png"

export default function Menu() {

    return (
        <NavMenu>
            <ul>
                <li><img src={logo} alt="" /></li>
                <div>
                    <li><Link to='/'><i className="fa-solid fa-house"></i></Link></li>
                    <li><Link to='/diagnostico'>Diagnóstico</Link></li>
                    <li><Link to='historico'>Histórico</Link></li>
                    <li><Link to='/entrar'>Entrar</Link></li>
                    <li><Link to='/perfil'><i className="fa-regular fa-user"></i></Link></li>
                </div>
            </ul>
        </NavMenu>
    )
}