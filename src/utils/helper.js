import React from "react"
import Movie from "../components/Movie"

// Function 01 : to filter/sort movies/shows 
function recentRelease(data,category) {
    // filtering movies/shows
    const filtredData = data.filter((movie)=>{
        return movie.category === category
    })
    // sorting movies/shows
    const newData = filtredData.sort((data1,data2)=>{
        return (new Date(data1.releaseDate) > new Date(data2.releaseDate) ? -1 : 1)
    })
    return newData;

}

// Function 02 : to filter the suggested movies
const suggested = (data)=>{
    const suggestedData= data.filter((movie)=>{
        return  movie.voteAverage>7.7;
    })
    return suggestedData
}

// Function 03 : to filter teh mostViwed movies
export const mostViwed = (data)=>{
    const mostViwedMovies = data.sort((movie1,movie2)=>{
        return movie1.popularity>movie2.popularity ? -1 : 1;
    })
    return mostViwedMovies}

// Function 04 : to map movies
export const mapping = (dataList)=>{
    const mappedList = dataList.map((movie)=>{
        return <Movie key={movie.posterPath} title= {movie.originalTitle} img = {movie.posterPath}/>
    })
    return mappedList
}

export {recentRelease, suggested}