import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './styles';
import './index.css';
import { App } from './App';
import { IframePage, HooksPage } from './pages';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Root = () => (
    <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" component={IframePage} />
                    <Route exact path="/iframes" component={IframePage} />
                    <Route exact path="/hooks" component={HooksPage} />
                </Switch>
            </App>
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
