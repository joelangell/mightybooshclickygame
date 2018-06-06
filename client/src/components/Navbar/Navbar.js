import React, { Fragment} from "react";
import "./Navbar.css";


const Navbar = props => (
    <Fragment>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="./images/boosh_logo.png" height="80" alt="The Mighty Boosh Logo"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            </div>
            <div className="mx-auto order-2">
                <a className="navbar-brand mx-auto text-secondary">{props.message}</a>
            </div>
            <div className="navbar-collapse collapse order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" >Score: {props.score} </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >High Score: {props.highscore}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
);

export default Navbar;

