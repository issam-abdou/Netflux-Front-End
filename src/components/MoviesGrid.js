import React from "react";
import Movie from "./Movie";

const MoviesGrid = (props)=>{
    // slice the movies after being filterning by helper Funcitons
    /*
    const FilteredMovies = props.movies.filter((mv)=>{
        return mv.genres.includes(props.filter)
    })
    console.log(FilteredMovies);
    */
    const movies = props.movies.slice(0,props.limit)
    //const movies = FilteredMovies.slice(0,props.limit)
    // map the sliced movies
    const movieList = movies.map((movie)=>{
        return <Movie 
            key={movie.posterPath} 
            // title= {movie.originalTitle} 
            // img = {movie.posterPath}
            movie = {movie}
            />
    })

    return(
        <section className={`section movies slider has-arrows ${props.type}`}>
            <div className="container">
                <h3 className="section-title">{props.title}</h3>
                <ul className="moviesGrid">
                    {movieList}
                </ul>
            </div>
        </section>
    )
}

export default MoviesGrid;