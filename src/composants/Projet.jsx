import './Projet.scss'

export default function Projet(props) {
    return (
        <li className="Projet">
            <div className="image">
                <img src={"../src/images/medias/" + props.id} alt={props.nom}/>
            </div>
            <div className="info">
                <p>{props.desc}</p>
            </div>
        </li>
    )
}