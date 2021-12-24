import React from "react"
// import Header from "../components/Header"
import MoviesGrid from "../components/MoviesGrid"
import { suggested, recentRelease, mostViwed } from "../utils/helper";
import Filter from "../components/Filter";
// import Footer  from "../components/Footer";

class Category extends React.Component{
    state={
        filterValue : null
    }
    handleFilter = (dataFromChild)=>{
        this.setState({filterValue:dataFromChild})
    }

    renderMoviesGrid = ()=>{
        return(
            <>
            <MoviesGrid 
                title = 'إقتراحتنا لك' 
                type = 'is-suggested'
                movies ={suggested(this.props.movies)}
                limit = {4}
                filter = {this.state.filterValue}
                />
                
                <MoviesGrid 
                title = 'الأكثر مشاهدة' 
                type = 'is-suggested'
                movies = {mostViwed([...this.props.movies])}
                limit = {4}/>

                
                <MoviesGrid 
                title = {` احدث ال${this.props.typeText} `}
                type = 'is-movies'
                movies = {recentRelease(this.props.movies,"Film")}
                limit= {32}/>
                </>
        )
    }

    renderFilterResult = ()=>{
        // filtering the movies according to the filterVlue of the state
        const filteredMovies = this.props.movies.filter((movie)=>{
            return movie.genres.includes(this.state.filterValue)
        })
        // Display the filtered Movies using the <MoviesGrid/>
        return (
            <MoviesGrid 
                title = {this.state.filterValue} 
                type = 'is-suggested'
                movies = {filteredMovies}
                />
        )
    }
    render(){
        return(
            <>
            <Filter 
            type={this.props.typeText} 
            optionText = {this.props.optionText}
            FilterChange={this.handleFilter}/>
            {this.state.filterValue? this.renderFilterResult() : this.renderMoviesGrid()}
            </>
        )
    }
}

export default Category