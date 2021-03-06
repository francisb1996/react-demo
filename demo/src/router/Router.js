import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home} from '../home/Home';
import {Map} from '../map/Map';
import {Profile} from '../profile/Profile';
import { Calculator } from '../calculator/Calculator';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/map' component={Map}/>
            <Route path='/calculator' component={Calculator}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    </main> 
);
