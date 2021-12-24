import React from "react"
// import Header from "../components/Header"
import MoviesGrid from "../components/MoviesGrid"
import { suggested, recentRelease, mostViwed } from "../utils/helper";
import Filter from "../components/Filter";
// import Footer  from "../components/Footer";

class Shows extends React.Component{
    
    render(){
        return(
            <>
            {/* <Header/> */}
            <Filter type="مسلسلات" optionText = ' نوع المسلسل'/>
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
                title = 'أحدث المسلسلات' 
                type = 'is-movies'
                movies={recentRelease(this.props.movies,'Show')}
                limit={32}/>
                {/* ==== */}

                {/* <Footer/> */}
                
            </>
        )
    }
}

export default Shows;