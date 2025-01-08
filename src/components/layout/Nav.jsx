import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    state = {
        burger: true,
    }

    handleChangeBurger = () => {
        this.setState({
            burger: !this.state.burger
        })
    }

    render() {
        const { burger } = this.state;
        return (
            <>
                <div className="navigation">
                    <div className={burger ? "menu-burger" : "menu-burger open"} onClick={this.handleChangeBurger}>
                        <div className="burger"></div>
                    </div>

                    <div className="navigation-content">
                        <div className="logo">
                            <NavLink to="/" exact onClick={this.handleClickNavGoTo}>transport-elblag.pl</NavLink>
                            <p>
                                <span className="fa fa-phone"></span>
                          +48 601 649 132
                                </p>
                        </div>
                        <nav className={burger ? "" : "show"}>
                            <ul>
                                <li>
                                    <NavLink to="/" exact onClick={this.handleClickNavGoTo}>Home</NavLink></li>
                                <li onClick={this.showPage}>
                                    <NavLink to="/o-firmie" exact onClick={this.handleClickNavGoTo}>O mnie</NavLink></li>
                                <li><NavLink to="/oferta" exact onClick={this.handleClickNavGoTo}>Oferta</NavLink></li>
                                <li><NavLink to="/cennik" exact onClick={this.handleClickNavGoTo}>Cennik</NavLink></li>
                                <li><NavLink to="/kontakt" exact onClick={this.handleClickNavGoTo}>Kontakt</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

export default Nav;
