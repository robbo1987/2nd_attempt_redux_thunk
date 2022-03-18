import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

export const Nav = ({models,brands}) => {
    return(
        <div>
        <nav>
            
            <Link to='/Home' >Home </Link>
            <Link to='/Models'> Models ({models.length}) </Link>
            <Link to='/Brands'> Brands ({brands.length})</Link>
        </nav>
        </div>
    )}


export default connect(state=>state)(Nav)