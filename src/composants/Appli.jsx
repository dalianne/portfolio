import {Switch, Route} from "react-router-dom"
import Entete from './Entete';
import Accueil from './Accueil';
import APropos from './APropos';
import ListeProjets from './ListeProjets';
import Footer from './Footer';
import "./Appli.scss"

export default function Appli() {
    return (
        <div className="Appli">
            <Entete />

            <Switch>
                <Route path="/a-propos">
                    <APropos />
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
    );
}