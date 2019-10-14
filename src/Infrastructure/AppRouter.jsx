import * as React from 'react';
import {HashRouter, Route} from "react-router-dom";
import {Navigator} from "./Navigator";
import {Switch} from "react-router";
import App from "../Home/App";

export class AppRouter extends React.Component {

    render() {
        return <div>
            <Navigator/>
            <div>
                <HashRouter>
                    <Switch>
                        <Route key="home" exact path="/">
                            <App/>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        </div>;
    }
}
