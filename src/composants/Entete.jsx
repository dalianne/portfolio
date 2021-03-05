import {Link, NavLink} from "react-router-dom"
import logo from "../images/logo.png"
import "./Entete.scss"

export default function Entete() {
    return (
        <header className="Entete">
            <Link to="/"><h1>go.Dali</h1></Link>
            <img src={logo} alt="go.dali"/>
            <div className="nav">
                <p>fr / en</p>
                <ul>
                    <li><NavLink to="/" activeClassName="actif">Projets</NavLink></li>
                    <li><NavLink to="a-propos" activeClassName="actif">À propos</NavLink></li>
                </ul>
            </div>
        </header> 
    );
}