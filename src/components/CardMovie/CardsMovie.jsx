import { Link } from "react-router-dom"

function CardsMovie({ id, title, poster_path, overview }){
    return(
        <Link to={`/movieDetail/${id}`}>
            <div  style={{width: 300,  margin: "50px"}}> 
                <h3>{title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} style={{width: 100, height: 150}}/>
                
            </div>
        </Link>
    )
}

export default CardsMovie

// <Link to={`/movieDetail/${id}`}></Link>