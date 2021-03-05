import './Projet.scss'

export default function Projet(props) {
    return (
        <li className="Projet">
            <div className="image">
                <img src={`${process.env.PUBLIC_URL}/medias${props.annee}/${props.id}.${props.type}`} alt="..."/>
            </div>
            <div className="info">
                <p>{props.desc}</p>
            </div>
        </li>
    )
}