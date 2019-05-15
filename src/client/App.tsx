import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Weather from './public/Weather';

export default class IApp extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <Router>
                <>
                    <div className="container-margin">
                        <Switch>
                            <Route exact path='/' component={Weather} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

interface IAppProps { }

interface IAppState { }