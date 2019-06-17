import React from 'react';
import './IframePage.css';
import { Iframe, IframePageProps } from './IframePage.types';

const IframePage = ({ iframes }: IframePageProps) => (
    <div className="Iframe">
        {iframes.map(({ url, props = {} }: Iframe, i) => (
            <div key={`${url} - ${i}`} className="Iframe__iframe">
                <iframe src={url} title={url} width="100%" height="100%" {...props} />
            </div>
        ))}
    </div>
);

export default IframePage;
