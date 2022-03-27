import React from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from './pages/products/Products'
import ProductEdit from "./pages/products/ProductEdit";
import PriceProductChart from "./pages/products/PriceProductChart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Categories from "./pages/categories/Categories";
import Keywords from "./pages/keywords/Keywords";
import Display from "./pages/Dashboard";
import KeywordCreate from "./pages/keywords/KeywordCreate";
import KeywordEdit from "./pages/keywords/KeywordEdit";
import KeywordProducts from "./pages/keywords/KeywordProduct";
import KeywordProductChart from "./pages/keywords/KeywordProductChart";
import KeywordProductEdit from "./pages/keywords/KeywordProductEdit";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={Display}/>
                <Route path={'/products'} exact component={Products}/>
                <Route path={'/categories_page'} exact component={Categories}/>
                <Route path={'/keywords_show'} exact component={Keywords}/>
                <Route path={'/keyword'} exact component={KeywordCreate}/>
                <Route path={'/keyword_products'} exact component={KeywordProducts}/>
                <Route path={'//keyword_product/edit/:id'} exact component={KeywordProductEdit}/>
                <Route path={'/keyword_product/:product_id'} exact component={KeywordProductChart}/>
                <Route path={'/keyword/edit/:id'} exact component={KeywordEdit}/>
                <Route path={'/product/edit/:id'} exact component={ProductEdit}/>
                <Route path={'/products/:product_id'} exact component={PriceProductChart}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/login'} component={Login}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
