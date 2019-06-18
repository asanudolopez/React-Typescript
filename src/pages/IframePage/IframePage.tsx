import React from 'react';
import './IframePage.css';
import { Iframe, IframePageProps, IframePageState } from './IframePage.types';
import { Grid, Button, TextField } from '@material-ui/core';

const URL_REGEXP = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

class IframePage extends React.Component<IframePageProps, IframePageState> {
    constructor(props: IframePageProps) {
        super(props);
        this.state = {
            iframes: props.iframes || [],
            url: '',
            urlError: true,
            props: '{}',
            propsError: false,
        };
    }
    handleSubmit = (e: any) => {
        const { iframes, url, urlError, props, propsError } = this.state;
        e.preventDefault();
        if (!urlError && !propsError) {
            this.setState({
                iframes: [
                    ...iframes,
                    {
                        url,
                        props: JSON.parse(props),
                    },
                ],
            });
        }
    };
    handleUrlChange = (e: any) => {
        const url = e.target.value;
        const urlError = !Boolean(url.match(URL_REGEXP));
        this.setState({ url, urlError });
    };
    handlePropsChange = (e: any) => {
        const props = e.target.value;
        let propsError = false;
        try {
            JSON.parse(props);
        } catch (err) {
            propsError = true;
        }
        this.setState({ props, propsError });
    };
    render() {
        const { iframes, url, urlError, props, propsError } = this.state;
        return (
            <Grid container direction="column" className="Iframe">
                <Grid item component="header" className="Iframe__header">
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <Grid container spacing={8} style={{ padding: 10 }}>
                            <Grid item xs>
                                <TextField
                                    id="url"
                                    label="URL"
                                    value={url}
                                    onChange={this.handleUrlChange}
                                    margin="normal"
                                    error={urlError}
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    id="props"
                                    label="Props"
                                    value={props}
                                    onChange={this.handlePropsChange}
                                    margin="normal"
                                    error={propsError}
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={this.handleSubmit}
                                size="large"
                                color="primary"
                                variant="contained"
                            >
                                Add
                            </Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid item className="Iframe__container" xs>
                    <Grid container justify="space-evenly" alignItems="center" style={{ flex: 1 }}>
                        {iframes.map(({ url, props = {} }: Iframe, i) => (
                            <Grid item key={`${url} - ${i}`} className="Iframe__iframe">
                                <iframe
                                    src={url}
                                    title={url}
                                    width="100%"
                                    height="100%"
                                    {...props}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default IframePage;
