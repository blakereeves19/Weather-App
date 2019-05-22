import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Weather from './public/Weather';

export default class IApp extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <Router>
                <>
                    <div className="container-margin cool-blues">
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <h1 style={{ fontFamily: `'Gloria Hallelujah', cursive`, fontSize: '100px' }}>Weather Minimalist</h1>
                            </div>
                        </div>
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