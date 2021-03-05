import {Link} from "react-router-dom"
import "./Accueil.scss"

export default function Accueil() {
  return (
    <section class="Accueil">
        <ul>
            <li><Link to="/2020">2020</Link></li>
            <li>- <Link to="/2019">2019</Link></li>
            <li>- <Link to="/2018">2018</Link></li>
        </ul>
    </section>
  );
}