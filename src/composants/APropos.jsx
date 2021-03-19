import "./APropos.scss"
import { Cookies } from "react-cookie"
import fr from "../data/fr.json"
import en from "../data/en.json"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import pinterest from "../images/pinterest.png"

export default function APropos(props) {
    const cookies = new Cookies();
    var titre
    var desc
    if(cookies.get("lang")==="fr") {
        titre = fr.APropos.titre
        desc = fr.APropos.desc
    }
    if(cookies.get("lang")==="en") {
        titre = en.APropos.titre
        desc = en.APropos.desc
    }
    return (
        <section className="Apropos">
            <h2>{titre}</h2>
            <p>{desc}</p>
            <ul>
                <li><a href="https://drive.google.com/file/d/1w6NsvFy4VNniWNI0wQKPFrucbJ-A5o_r/view?usp=sharing">Curriculum Vitæ</a></li>
            </ul>
            <ul>
                <li>(438) 396-2765</li>
                <li><a href="mailto: dalianne.gosselin@hotmail.com">dalianne.gosselin@hotmail.com</a></li>
            </ul>
            <ul className="liensMedias">
                <li><a href="https://www.linkedin.com/in/dalianne-gosselin/"><img src={linkedin} alt="LinkedIn"/></a></li>
                <li><a href="https://www.instagram.com/go.dali/"><img src={instagram} alt="Instagram"/></a></li>
                <li><a href="https://pin.it/jPJMkN3"><img src={pinterest} alt="Pinterest"/></a></li>
            </ul>
        </section>
    );
}