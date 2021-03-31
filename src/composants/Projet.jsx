import './Projet.scss'

export default function Projet(props) {
    var baliseLien
    if(props.lien==="") {
        baliseLien = <>
            <img src={`${process.env.PUBLIC_URL}/medias${props.annee}/${props.id}.${props.type}`} alt="..."/>
            <p>{props.desc}</p>
        </>
    }
    else {
        baliseLien = <>
            <a href={props.lien} target="blank">
                <img src={`${process.env.PUBLIC_URL}/medias${props.annee}/${props.id}.${props.type}`} alt="..."/>
                <p>{props.desc}</p>
            </a>
        </>

    }

    return (
        <li className="Projet">
            {baliseLien}
        </li>
    )
}