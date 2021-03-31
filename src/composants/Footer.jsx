import "./Footer.scss"
import { Cookies } from "react-cookie"
import fr from "../data/fr.json"
import en from "../data/en.json"


export default function Footer() {
    const cookies = new Cookies();
    var texte
    if(cookies.get("lang")==="fr") {
        texte = fr.Footer.texte
    }
    if(cookies.get("lang")==="en") {
        texte = en.Footer.texte
    }

    return (
        <footer className="Footer">
            <a href="https://www.instagram.com/go.dali/" target="blank">
                <div className="marquee">
                    <div>
                        <span>{texte}</span>
                        <span>{texte}</span>
                    </div>
                </div>
            </a>
        </footer>
    )
}