import React from 'react';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import data from "./data/movies.json"
import Shows from './pages/Shows';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import Category from './pages/Category';
// React Router
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Details from './pages/Details';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  state={
    movies: data
}
  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
      <div className="container">
        {/* <Movies movies = {this.state.movies}/> */}
        {/* <Shows movies={this.state.movies}/> */}
        {/* <HomePage movies={this.state.movies} /> */}
        {/* <Routes>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/movies' component={Movies}/>
          <Route exact path='/shows' component={Shows}/>
        </Routes> */}
        {/* ==== test2 : FCC ==== */}
        {/* <Routes>
          <Route exact path='/' element={HomePage}/>
          <Route  path='/movies' element={Movies}/>
          <Route  path='/shows' element={Shows}/>
        </Routes> */}
        {/* ==== test3 : Barmej ==== */}
        {/* <Routes>
          <Route  path='/' element={
            <>
            {(props)=>{
              return( <HomePage {...props} movies={this.state.movies}/>)
            }}
            </>
          }/>
          <Route path='/movies' render={
            (props)=>{
              return( <Movies {...props} movies={this.state.movies}/>)
            }
          }/>
          <Route path='/shows' render={
            (props)=>{
              return( <Shows {...props} movies={this.state.movies}/>)
            }
          }/>
          <Route path='/f' element={<Footer/>}/>
        </Routes> */}

        {/* ==== test finale TRAVERSY MEDIA ==== */}

        <Header/>
        <Routes>
          <Route path='/' element={<HomePage movies={this.state.movies}/>}/>
          {/* <Route path='/movies' element={<Movies movies={this.state.movies}/>}/> */}
          {/* <Route path='/shows' element={<Shows movies={this.state.movies}/>}/> */}
          <Route path='/details/:id' element={<Details movies={this.state.movies}/>}/>
          <Route path='/movies' element={<Category movies={this.state.movies} typeText="أفلام" optionText = "نوع الفيلم"/>}/>
          <Route path='/shows' element={<Category movies={this.state.movies} typeText="مسلسلات" optionText = "نوع المسلسل"/>}/>
          <Route path ='/search/:keyword' element={<SearchPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
    // {
    //   <HomePage movies={this.state.movies}/>
    // }
    );
  }
}

export default App;
