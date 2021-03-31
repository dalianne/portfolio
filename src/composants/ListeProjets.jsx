import {Switch, Route, Link} from "react-router-dom"
import { Cookies } from "react-cookie"
import fr from "../data/fr.json"
import en from "../data/en.json"
import Projet from './Projet'
import './ListeProjets.scss'

export default function ListeProjets(props) {
    const cookies = new Cookies()
    var projetTraduit
    if(cookies.get("lang")==="fr") {
        projetTraduit= <Switch>
                            <Route path="/2021">{fr.Projets.p2021.map(projet => 
                                <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                            <Route path="/2020">{fr.Projets.p2020.map(projet => 
                                <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                            <Route path="/2019">{fr.Projets.p2019.map(projet => <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                            <Route path="/2018">{fr.Projets.p2018.map(projet => 
                                <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                        </Switch>
    }
    if(cookies.get("lang")==="en") {
        projetTraduit= <Switch>
                            <Route path="/2021">{en.Projets.p2021.map(projet => 
                                <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                            <Route path="/2020">{en.Projets.p2020.map(projet => 
                                <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                            <Route path="/2019">{en.Projets.p2019.map(projet => <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                            <Route path="/2018">{en.Projets.p2018.map(projet => 
                                <Projet annee={props.annee} id={projet.id} type={projet.type} lien={projet.lien} desc={projet.desc} />)}
                            </Route>
                        </Switch>
    }

    return (
        <section className={"ListeProjets "+props.annee}>
            <h2>{props.annee}</h2>
            <ul className={`p${props.annee}`}>
                {projetTraduit}
            </ul>
            <div className="nav">
                <div className="suivant">
                    <Switch>
                        <Route path="/2020">
                            <span><Link to="/2021">&#8592;2021</Link></span>
                        </Route>
                        <Route path="/2019">
                            <span><Link to="/2020">&#8592;2020</Link></span>
                        </Route>
                        <Route path="/2018">
                            <span><Link to="/2019">&#8592;2019</Link></span>
                        </Route>
                    </Switch>
                </div>
                <div className="precedent">
                    <Switch>
                        <Route path="/2021">
                            <span><Link to="/2020">2020&#8594;</Link></span>
                        </Route>
                        <Route path="/2020">
                            <span><Link to="/2019">2019&#8594;</Link></span>
                        </Route>
                        <Route path="/2019">
                            <span><Link to="/2018">2018&#8594;</Link></span>
                        </Route>
                    </Switch>
                </div>
            </div>
        </section>
    )
}