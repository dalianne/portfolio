import "./Entete.scss"
import APropos from "./APropos"

export default function Entete() {
  return (
    <header className="Entete">
            <h1>go.Dali</h1>
            <img src="logo.png" alt="go.dali"/>
        <div class="nav">
            <p>fr / en</p>
            <ul>
                <li class="actif"><a href="../public/index.html">Projets</a></li>
                <li><a href="../public/aPropos.html">À propos</a></li>
            </ul>
        </div>
    </header> 
  );
}