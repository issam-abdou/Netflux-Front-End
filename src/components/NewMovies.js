import React from 'react';
import Movie from './Movie';
import MoviesGrid from './MoviesGrid';
import { recentRelease } from '../utils/helper';

const NewMovies = (props)=> {
    /*
    const newMovies = recentRelease(props.movies,"Film")
    // Render movieList using .map()
    const movieList = newMovies.map((movie)=>{
        return <Movie key={movie.posterPath} title= {movie.originalTitle} img = {movie.posterPath}/>
    })
    */
    // --
    return (
        <MoviesGrid 
        title = 'أحدث الأفلام' 
        type = 'is-movies'
        movies = {recentRelease(props.movies,"Film")}
        limit= {8}/>
    );
}
/*
{movieList.slice(0,4)}
        </MoviesGrid> */
export default NewMovies;