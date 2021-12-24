import React from "react"

const Movie = (props)=>{
    function trimExtension(fileName) {
        return fileName.split(".")
    }
        return(
            <li className="movie">
                    <a href={`/details${trimExtension(props.movie.posterPath)[0]}`}>
                        <img src={`https://image.tmdb.org/t/p/w200${props.movie.posterPath}`} alt={props.movie.originalTitle} />
                        <span className="movie-description">
                        {props.movie.originalTitle}
                        <span className="play-icon"><i className="fas fa-play"></i></span>
                        </span>
                    </a>
            </li>
        )
}

export default Movie;