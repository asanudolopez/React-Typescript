export interface Iframe {
    url: string;
    props?: any;
}

export interface IframePageProps {
    iframes: Iframe[];
}

export interface IframePageState {
    iframes: Iframe[];
    url: string;
    urlError: boolean;
    props: string;
    propsError: boolean;
}
