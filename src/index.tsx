import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { theme } from './styles';
import './index.css';
import { App } from './App';
import { IframePage } from './pages';

const Root = () => (
    <MuiThemeProvider theme={theme}>
        <App>
            <IframePage iframes={[]} />
        </App>
    </MuiThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
