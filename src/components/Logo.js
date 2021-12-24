import React from "react"
import logo from '../img/logo.svg'

const Logo = (props)=>{
    return(
        <a href="/" className={`${props.classes} navbar-item` }>
            <img src={logo} alt='' width="80" />
        </a>
    )
}
// Set a defaut props to the component
Logo.defaultProps = {
    classes : ""
}

export default Logo;