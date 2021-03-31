import {Switch, Route} from "react-router-dom"
import {Cookies} from 'react-cookie'
import Entete from './Entete'
import Accueil from './Accueil'
import APropos from './APropos'
import ListeProjets from './ListeProjets'
import Footer from './Footer'
import "./Appli.scss"

export default function Appli() {
    const cookies = new Cookies()
    if(cookies.get("lang")==="fr") {
        console.log("lang: fr")
    }
    else if (cookies.get("lang")==="en") {
        console.log("lang: en")
    }
    else {
        cookies.set('lang', 'fr')
        console.log("default lang: fr")
    }
    
    return (
        <div className="Appli">
            <Entete />

            <Switch>
                <Route path="/a-propos">
                    <APropos />
                </Route>
                <Route path="/2021">
                    <ListeProjets annee="2021"/>
                </Route>
                <Route path="/2020">
                    <ListeProjets annee="2020"/>
                </Route>
                <Route path="/2019">
                    <ListeProjets annee="2019"/>
                </Route>
                <Route path="/2018">
                    <ListeProjets annee="2018"/>
                </Route>
                <Route path="/">
                    <Accueil />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}