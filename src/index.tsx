import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Iframe } from './pages';

const Root = () => (
    <App>
        <Iframe
            urls={[
                'https://localhost:8443/embed/gxno8vsyetpkfzro1ime/default/dvib0zf7luog57bpujqe',
                'https://lfview-beta.test.seequent.xyz/embed/fn8nvngnz0q0wrzeqq7x/default/aswq90dn5f4mgbtll71l',
                'https://lfview-delta.test.seequent.xyz/embed/b5jlj0tpmms4fvjygm5g/default/ta035hw40wacvwf0g4a2',
            ]}
        />
    </App>
);

ReactDOM.render(<Root />, document.getElementById('root'));
