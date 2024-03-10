import { Link } from "react-router-dom";


export default function Post({informations}){
    const status = informations.status?'found':'lost';
    return(<article>
        <h2>{informations.name}</h2>
        <p>{informations.type}</p>
        <p>
            {informations.status.toString()}
            </p>
        <Link to={`/${status}/${informations.id}`}>details</Link>
    </article>)
}