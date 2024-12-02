import React, { Component } from "react";

import css from "./Navbar.module.css";

class Navbar extends Component {

    render() {

        return (
            <nav className={css.Navbar}>
                <div className={css.Container}>
                <img src="/logobeyond.png" alt="Logo página" className={css.NavLogo}/>
                    <ul className={css.Navlinks}>
                    <li><a href="#about">SOBRE NOSOTROS</a></li>
                    <li><a href="#services">SERVICIOS</a></li>
                    <li><a href="#contact">CONTACTO</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
