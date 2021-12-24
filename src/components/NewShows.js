import React from 'react';
import Movie from './Movie';
import MoviesGrid from './MoviesGrid';
import { recentRelease} from '../utils/helper';

const NewShows =(props)=> {
    /*
    const newShows = recentRelease(props.movies,"Show")
    // Rendering the showList using .map()
    const showList = newShows.map((show)=>{
        return <Movie key={show.posterPath} title= {show.originalTitle} img = {show.posterPath}/>
    })
    */
    //--
    return (
        <MoviesGrid 
        title = 'أحدث المسلسلات' 
        type = 'is-movies'
        movies={recentRelease(props.movies,'Show')}
        limit={8}/>
    );
}
/*
{showList.slice(0,4)}
        </MoviesGrid>
        */
export default NewShows;