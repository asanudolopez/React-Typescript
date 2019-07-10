import React from 'react';
import './HooksPage.css';
import { HooksPageProps } from './HooksPage.types';
import { Grid, Button } from '@material-ui/core';

const HooksPage = (props: HooksPageProps) => {
    const [foo, setFoo] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => setFoo(!foo), 3000);
    });
    console.log(props);
    return (
        <Grid container justify="center" alignItems="center" className="Hooks">
            <Button color="primary" variant="contained" onClick={() => console.log('click!')}>
                Das Button!
            </Button>
        </Grid>
    );
};
export default HooksPage;
