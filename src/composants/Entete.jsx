import {Link, NavLink} from "react-router-dom"
import {Cookies} from 'react-cookie'
import fr from "../data/fr.json"
import en from "../data/en.json"
import logo from "../images/logo.png"
import "./Entete.scss"

export default function Entete() {
    const cookies = new Cookies()

    var projet
    var apropos
    if(cookies.get('lang')==="fr") {
        projet = fr.Entete.projets
        apropos = fr.Entete.apropos
    }
    if(cookies.get('lang')==="en") {
        projet = en.Entete.projets
        apropos = en.Entete.apropos
    }

    function handleClick() {
        if(cookies.get("lang")==="fr"){
            cookies.set('lang', 'en')
            window.location.reload()
        }
        else if (cookies.get("lang")==="en") {
            cookies.set('lang', 'fr')
            window.location.reload()
        }
    }
    
    return (
        <header className="Entete">
            <Link to="/"><h1>go.Dali</h1></Link>
            <img src={logo} alt="go.dali"/>
            <div className="nav">
                <button onClick={handleClick}>
                    fr / en
                </button>
                <ul>
                    <li><NavLink to="/" activeClassName="actif" exact >{projet}</NavLink></li>
                    <li><NavLink to="a-propos" activeClassName="actif">{apropos}</NavLink></li>
                </ul>
            </div>
        </header> 
    )
}