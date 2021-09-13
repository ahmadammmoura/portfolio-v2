import React from 'react'
import Logo from '../../assets/Logo'
import css from './styles/nav.module.scss'
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <header>
            <div className={css.logo} >
               <Link to='/'> <Logo/></Link>
            </div>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skills'> My Skills</Link></li>
                <li><Link to='/projects'> Projects</Link></li>
                <li><Link to='/contact'> Contact</Link></li>
            </ul>
            <div className={css.footer} >
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </header>
    )
}

export default NavBar
