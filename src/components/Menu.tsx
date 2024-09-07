import { NavMenu } from "../styles";
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <NavMenu>
            <ul>
                <li><Link to='/diagnostico'>Diagnóstico</Link></li>
                <li><Link to='historico'>Histórico</Link></li>
                <li><Link to='/entrar'>Entrar</Link></li>
                <li><Link to='/perfil'><i className="fa-regular fa-user"></i></Link></li>
            </ul>
        </NavMenu>
    )
}