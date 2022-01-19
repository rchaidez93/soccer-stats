import React, { useEffect } from 'react';
import { useDates } from '../hooks/useDates';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FixtureCard from '../components/FixtureCard';
import { useTheme } from '@material-ui/core';
import WeekSelectionButtons from '../components/WeekSelectionButtons';
import livePLFixtures from '../mockApiData/live_fixtures_pl.json';
import fixturePL21 from '../mockApiData/premier_league_fixtures_21.json';

const LiveFixtures = () => {

    const [liveFixtures, setLiveFixtures] = React.useState([]);
    const [fixtures, setFixtures] = React.useState([]);
    const { from, to, getPreviousDates, getNextDates, fromView, toView, setFrom, setTo } = useDates({
        from: null,
        to:new Date()
    });

    const theme = useTheme();

    //PL live fixtures
    useEffect(() => {
        const {response} = livePLFixtures;
        setLiveFixtures(response);
    }, [setLiveFixtures]);

    //PL Fixtures
    useEffect(() => {
        const {response} = fixturePL21;
        setFixtures(response.sort((a,b) => a.fixture.timestamp > b.fixture.timestamp ? 1 : -1));
    } ,[setFixtures, fromView ,toView]);

    return (
        <div>
            <div style={{borderStyle:'solid', borderColor: 'lightgrey', marginBottom: '16px'}}>
            {
                liveFixtures.length > 0 ? (
                    <>
                    <Grid container spacing={2}>
                    {liveFixtures
                    .sort((a,b) => a.fixture.timestamp > b.fixture.timestamp ? 1 : -1)
                    .map(fixture => (
                        <Grid key={fixture.fixture.id} item xs={12}>
                            <FixtureCard
                                teams={fixture.teams}
                                score={fixture.goals}
                                fixture={fixture.fixture}
                                league={fixture.league}
                            />
                        </Grid>
                    ))}
                    </Grid>
                    </>
                ) : (
                    <Typography align="center" style={{color:theme.palette.text.primary}}>No Live Fixtures</Typography>
                )
            }
            </div>
            <WeekSelectionButtons
            onPreviousDates={(from)=>getPreviousDates(from)} 
            onNextDates={(to)=> getNextDates(to)} 
            from={from} 
            to={to}
            fromView={fromView} 
            toView={toView}
            onFromChange={newFrom=>setFrom(newFrom)}
            onToChange={newTo=>setTo(newTo)}
            />
                {fixtures.length > 0 
                ? (
                    <Grid container spacing={2}>
                    {fixtures
                    .sort((a,b) => a.fixture.timestamp > b.fixture.timestamp ? 1 : -1)
                    .map(fixture => (
                    <Grid key={fixture.fixture.id} item xs={12}>
                        <FixtureCard
                            teams={fixture.teams}
                            score={fixture.goals}
                            fixture={fixture.fixture}
                            league={fixture.league}
                        />
                    </Grid>
                    ))}
                    </Grid>
                ) : (
                    <div style={{display: 'flex', justifyContent:'center'}}>
                    <Typography align="center" style={{color:theme.palette.text.primary}}>No matches this week</Typography>
                    </div>
                )}
        </div>
    );
};

export default LiveFixtures;