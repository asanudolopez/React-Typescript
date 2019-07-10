import React, { useEffect, useMemo, useState } from 'react';
import './HooksPage.css';
import { HooksPageProps } from './HooksPage.types';
import { Grid, Button } from '@material-ui/core';

const HooksPageBase = (props: HooksPageProps) => {
    const [foo, setFoo] = useState(false);
    const handleClick = () => setFoo(!foo);
    useMemo(() => {
        console.log('useEffect');
        return () => {};
    }, [props.testProp]);

    // console.log(props, 'props');
    // console.log(foo, 'foo');
    // console.log(useEffectReturn, 'useEffectReturn');
    return (
        <Grid container justify="center" alignItems="center" className="Hooks" direction="column">
            SubComponent
            <Grid item>
                <Button color="primary" variant="contained" onClick={handleClick}>
                    Das Button!
                </Button>
            </Grid>
        </Grid>
    );
};

const HooksPage = () => {
    const [testProp, setTestProp] = useState(false);
    useEffect(() => {
        setTimeout(() => setTestProp(testProp), 800);
    });
    return <HooksPageBase testProp={testProp} />;
};

export default HooksPage;
