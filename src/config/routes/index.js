import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Comment, Home} from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/comment">
                    <Comment />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes