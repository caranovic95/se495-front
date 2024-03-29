import React, {Component, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {config} from "../config";

const Nav = () => {

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('user', config);
            }
        )();
    })

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">SE495</a>

            <ul className="my-2 my-md-0 mr-md-3">
                <Link to="/login" className="p-2 text-white text-decoration-none"

                >Sign out</Link>
            </ul>
        </nav>
    );
}

export default Nav;