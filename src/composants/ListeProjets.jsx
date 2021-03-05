import {Switch, Route} from "react-router-dom"
import Projet from './Projet'
import tabProjets from "../data/projets.json"
import './ListeProjets.scss'

export default function ListeProjets(props) {
    return (
        <section className={"ListeProjets "+props.annee}>
            <h2>{props.annee}</h2>
            <ul>
                <Switch>
                    <Route path="/2020">
                        {tabProjets.p2020.map(projet => 
                            <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />
                        )}
                    </Route>
                    <Route path="/2019">
                        {tabProjets.p2019.map(projet => 
                            <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />
                        )}
                    </Route>
                    <Route path="/2018">
                        {tabProjets.p2018.map(projet => 
                            <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />
                        )}
                    </Route>
                </Switch>
            </ul>
        </section>
    );
}