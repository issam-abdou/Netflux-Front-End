import React, {useState} from "react";
import Logo from "./Logo";
import MenuBar from "./MenuBar"
import {useLocation, useNavigate, useParams} from 'react-router-dom'


const Header =(props)=>{
    const [searchTerm, setSearchTerm] =useState("")
    const [origin, setOrigin] = useState("")
    let navigate = useNavigate();
    const handleChange=(event)=>{
        setSearchTerm(event.target.value)
        // setOrigin()
        // event.target.value? navigate(`/search/${event.target.value}`): navigate('/')
        navigate(`/search/${event.target.value}`)
    }
    const keyword = useParams().keyword
    console.log(keyword);
    const handleClick = ()=>{

    }
    
        return(
            <header className="section" role="navigation">
                <div className="container">
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="navbar-burger" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <Logo/>
                    <MenuBar/>
                    <div className="navbar-search">
                        <button>
                            <i className="fas fas-search"></i>
                            <input className="searchInput" type="text" name="search" placeholder='إبحث عن فيلم أو مسلسل...' onChange={handleChange}></input>
                            <button onClick={handleClick}>Search</button>
                        </button>
                    </div>
                </div>

            </header>
        )
    }

/*
class Header extends React.Component{
    state={
        searchTerm:""
    }
    handleChange=(event)=>{
        this.setState({searchTerm:event.target.value})
        let navigate = useNavigate();
        return navigate(`/search/${this.state.searchTerm}`)
    }
    render(){
        return(
            <header className="section" role="navigation">
                <div className="container">
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="navbar-burger" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <Logo/>
                    <MenuBar/>
                    <div className="navbar-search">
                        <button>
                            <i className="fas fas-search"></i>
                            <input className="searchInput" type="text" name="search" placeholder='إبحث عن فيلم أو مسلسل...' onChange={this.handleChange}></input>
                        </button>
                    </div>
                </div>

            </header>
        )
    }
}
*/
export default Header;