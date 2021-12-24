import React from "react";
// import Movie from "./Movie";
import MoviesGrid from "./MoviesGrid";
import { suggested} from "../utils/helper";

const MovieSeggustion = (props)=>{
    //const suggetedMovies = suggested(props.movies)
    
    /*const movieList = suggetedMovies.map((movie)=>{
        return <Movie key={movie.posterPath} title= {movie.originalTitle} img = {movie.posterPath}/>
    })*/
    
    //const movieList = mapping(suggetedMovies)
        return(
            <MoviesGrid 
                title = 'إقتراحتنا لك' 
                type = 'is-suggested'
                movies ={suggested(props.movies)}
                limit = {4}/>
                
        )
}
{/* {movieList.slice(0,4)} */}
            /*</MoviesGrid>*/

export default MovieSeggustion;