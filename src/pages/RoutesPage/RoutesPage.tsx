import React from 'react';
import './RoutesPage.css';
import { RoutesPageProps } from './RoutesPage.types';
import { Grid } from '@material-ui/core';

const RoutesPage = (props: RoutesPageProps) => {
    console.log(props);
    return (
        <Grid container justify="center" alignItems="center" className="Routes" direction="column">
            Routes!
        </Grid>
    );
};

export default RoutesPage;
