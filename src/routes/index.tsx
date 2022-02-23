import React from 'react'
import { Switch } from 'react-router-dom';

import Route from './Route';

import { Cart } from '../pages/Cart'
import { Products } from '../pages/Products';

export function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/Cart" component={Cart} />
        </Switch>
    )
}