import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MoviesGrid from "../components/MoviesGrid";
import { suggested, recentRelease, mostViwed } from "../utils/helper";

// import MovieSeggustion from "../components/MovieSuggestion";
// import MostViwed from "../components/MostViwed";
// import NewShows from "../components/NewShows";
// import NewMovies from "../components/NewMovies";

// import images to use it inside all components (BECAUSE THIS IS THE PARENT COMPONENTS)
// import image1 from "../img/movie1.svg"
// import image2 from "../img/movie2.svg"
// import image3 from "../img/movie3.svg"
// import image4 from "../img/movie4.svg"
// const posterImages = [image1,image2,image3,image4]

import data from "../data/movies.json"

class HomePage extends React.Component{
    render(){
        // console.log(data);
        return(
            <>
                {/* <Header/> */}
                <Hero/>
                <MoviesGrid 
                title = 'إقتراحتنا لك' 
                type = 'is-suggested'
                movies ={suggested(this.props.movies)}
                limit = {4}/>
                {/* ==== */}
                
                <MoviesGrid 
                title = 'الأكثر مشاهدة' 
                type = 'is-suggested'
                movies = {mostViwed([...this.props.movies])}
                limit = {4}/>
                {/* ==== */}
                
                <MoviesGrid 
                title = 'أحدث الأفلام' 
                type = 'is-movies'
                movies = {recentRelease(this.props.movies,"Film")}
                limit= {8}/>
                {/* ==== */}
                
                <MoviesGrid 
                title = 'أحدث المسلسلات' 
                type = 'is-movies'
                movies={recentRelease(this.props.movies,'Show')}
                limit={8}/>
                {/* ==== */}
                
                {/* <Footer/> */} 
                {/* <MovieSeggustion movies = {this.state.movies} />
                <MostViwed movies = {this.state.movies}/>
                <NewShows movies = {this.state.movies}/>
                <NewMovies movies = {this.state.movies}/> */}
            </>
        )
    }
    }
export default HomePage;