import './Projet.scss'

export default function Projet(props) {
    return (
        <li className="Projet">
            <img src={`${process.env.PUBLIC_URL}/medias${props.annee}/${props.id}.${props.type}`} alt="..."/>
            <p>{props.desc}</p>
        </li>
    )
}