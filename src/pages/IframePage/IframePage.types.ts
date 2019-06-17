export interface Iframe {
    url: string;
    props?: any;
}

export interface IframePageProps {
    iframes: Iframe[];
}
