import React, {Dispatch, useEffect, useState} from 'react';
import Nav from "./Nav";
import Menu from "./Menu";
import axios from "axios";
import {Redirect} from 'react-router-dom';
const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false);


    return (
        <>
            <Nav/>

            <div className="container-fluid">
                <div className="row">
                    <Menu/>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default  Wrapper;