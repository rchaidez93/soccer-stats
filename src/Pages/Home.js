import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import HeaderBanner from '../components/HeaderBanner';
import {
    Switch,
    Route,
} from "react-router-dom";
import Standings from './Standings';
import Teams from './Teams';
import Fixtures from './Fixtures';
import LiveFixtures from './LiveFixtures';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const sections=[{title: 'Home', url: '/'},{title: 'Fixtures', url: '/fixtures'}, {title: 'Standings', url: '/standings'}, {title: 'Teams', url: '/teams'}];

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 10,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
        </div>
        </Zoom>
    );
}

const Home = (props) => {

    return (
    <>
      <Container maxWidth="lg">
        <Header title="Premier League" sections={sections}/>
        <main>
            <HeaderBanner />
            <Switch>
                <Route exact path="/">
                    <LiveFixtures />
                </Route>
                <Route path="/fixtures">
                    <Fixtures />
                </Route>
                <Route path="/standings">
                    <Standings />
                </Route>
                <Route path="/teams">
                    <Teams />
                </Route>
            </Switch>
        </main>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
        </Fab>
    </ScrollTop>
    </>

    );
};

export default Home;