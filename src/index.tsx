import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { IframePage } from './pages';

const Root = () => (
    <App>
        <IframePage
            iframes={[
                {
                    url:
                        'https://localhost:8443/embed/gxno8vsyetpkfzro1ime/default/dvib0zf7luog57bpujqe',
                    props: {
                        allowFullScreen: true,
                    },
                },
                {
                    url:
                        'https://localhost:8443/embed/gxno8vsyetpkfzro1ime/default/dvib0zf7luog57bpujqe',
                },
                {
                    url:
                        'https://localhost:8443/app/gxno8vsyetpkfzro1ime/default/dvib0zf7luog57bpujqe',
                    props: {
                        allowFullScreen: true,
                    },
                },
                {
                    url:
                        'https://localhost:8443/app/gxno8vsyetpkfzro1ime/default/dvib0zf7luog57bpujqe',
                },
            ]}
        />
    </App>
);

ReactDOM.render(<Root />, document.getElementById('root'));
