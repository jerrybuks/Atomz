import React from 'react'
import { Link } from "react-router-dom"; 

export default function FormNav() {
    return (
        <nav className="nav" >
            <ul className="nav-ul">
                <li> <Link style={{ color : "#fff"}} to="/">atomz</Link></li>
            </ul>
        </nav>
    )
}
