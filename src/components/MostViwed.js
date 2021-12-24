import React from "react";
import Movie from "./Movie";
import MoviesGrid from "./MoviesGrid";
import { mostViwed } from "../utils/helper";


const MostViwed =(props)=>{
    // filtering the movies by popularity
    /*
    const mostViwedMovies = mostViwed([...props.movies])

    const movieList = mostViwedMovies.map((movie)=>{
        return <Movie key={movie.posterPath} title= {movie.originalTitle} img = {movie.posterPath}/>
    })
    */
        return(
            <MoviesGrid 
            title = 'الأكثر مشاهدة' 
            type = 'is-suggested'
            movies = {mostViwed([...props.movies])}
            limit = {4}/>
                
        )
}
/*
{movieList.slice(0,4)}
            </MoviesGrid>
*/

export default MostViwed;