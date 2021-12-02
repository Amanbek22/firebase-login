import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <NavLink className="link" exact activeClassName="active" to="/">Login</NavLink>
            <NavLink className="link" activeClassName="active" to="/register">Register</NavLink>
        </div>
    )
}
