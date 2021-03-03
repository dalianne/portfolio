import Projet from './Projet';
import tabProjets from "../data/projets.json"
import "./ListeProjets.scss"

export default function ListeProjets() {
    return (
        <div className="ListeProjets">
            <h2></h2>
            <ul>
            {tabProjets.map(projet => 
                    <Projet id={projet.id} lien={projet.lien} desc={projet.desc} />
                )}
            </ul>
        </div>
    );
}