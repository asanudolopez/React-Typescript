import React from 'react';
import './Iframe.css';
import { IframeProps } from './Iframe.types';

const Iframe = ({ urls }: IframeProps) => (
    <div className="Iframe">
        {urls.map((url: string) => (
            <div key={url} className="Iframe__iframe">
                <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    style={{ border: 'thin solid black' }}
                />
            </div>
        ))}
    </div>
);

export default Iframe;

// <Iframe
//     urls={[
//         'https://localhost:8443/embed/gxno8vsyetpkfzro1ime/default/dvib0zf7luog57bpujqe',
//         'https://lfview-beta.test.seequent.xyz/embed/fn8nvngnz0q0wrzeqq7x/default/aswq90dn5f4mgbtll71l',
//         'https://lfview-delta.test.seequent.xyz/embed/b5jlj0tpmms4fvjygm5g/default/ta035hw40wacvwf0g4a2',
//     ]}
// />
