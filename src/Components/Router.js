import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../Components/App';
import Form from "../Components/Form";
import Restuarant from '../Components/Restuarant';


function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/form/:Id" component={Form} />
            <Route path="/restuarant" component={Restuarant} />
        </BrowserRouter>
    )
}

export default Router;