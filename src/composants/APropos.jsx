import "./APropos.scss"

export default function APropos() {
  return (
    <section className="Apropos">
        <h2>À propos</h2>
        <p>Étudiante en multimédia à Montréal, je m'intéresse énormément au design graphique. Je désire approfondir mes connaissances et faire mes preuves dans le domaine créatif.</p>
        <ul>
            <li><a href="https://drive.google.com/file/d/1w6NsvFy4VNniWNI0wQKPFrucbJ-A5o_r/view?usp=sharing">Curriculum Vitæ</a></li>
        </ul>
        <ul>
            <li>(438) 396-2765</li>
            <li><a href="mailto: dalianne.gosselin@hotmail.com">dalianne.gosselin@hotmail.com</a></li>
        </ul>
        <ul class="liensMedias">
            <li><a href="https://www.linkedin.com/in/dalianne-gosselin/"><img src="" alt=""/></a></li>
            <li><a href="https://www.instagram.com/go.dali/"><img src="" alt=""/></a></li>
            <li><a href="https://pin.it/jPJMkN3"><img src="" alt=""/></a></li>
        </ul>
    </section>
  );
}