import React from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from './pages/products/Products'
import ProductEdit from "./pages/products/ProductEdit";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={Dashboard}/>
                <Route path={'/product'} exact component={Products}/>
                <Route path={'/product/edit/:id'} exact component={ProductEdit}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
