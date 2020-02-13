import React, { Component }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </BrowserRouter>
    )
}