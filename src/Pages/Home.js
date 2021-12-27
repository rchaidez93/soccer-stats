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

const sections=[{title: 'Home', url: '/'},{title: 'Fixtures', url: '/fixtures'}, {title: 'Standings', url: '/standings'}, {title: 'Teams', url: '/teams'}];

const Home = () => {

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
    </>

    );
};

export default Home;