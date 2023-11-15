import React, { useEffect } from 'react';
import { useRouter } from '../hooks/useRouter';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FixtureCard from '../components/FixtureCard';
import { useDates } from '../hooks/useDates';
import { useTheme } from '@material-ui/core';
import WeekSelectionButtons from '../components/WeekSelectionButtons';
// import chelseaFixturePL21 from '../mockApiData/fixture_chelsea_pl21.json';
import { getFixtures } from '../api/fixures';


const Fixtures = () => {
    const [fixtures, setFixtures] = React.useState([]);
    const { query } = useRouter();
    const { from, to, getPreviousDates, getNextDates, fromView, toView, setFrom, setTo } = useDates({from:null, to:new Date()});
    const theme = useTheme();
    
    useEffect(() => {
        //can get fixtures for a specific team.
        const {team} = query;
        // const {response} = chelseaFixturePL21;
        // setFixtures(response);
        getFixtures({params: {league: 39,season: 2023, team: team, from:fromView, to:toView}})
        .then(({data}) => {
            setFixtures(data.data.response);
        })
    }, [query, setFixtures, fromView, toView]);

    return (
        <>
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
                <Grid container spacing={3}>
                {fixtures.map(fixture => (
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
            )
            : <Typography align="center" style={{color:theme.palette.text.primary}}>No matches this week</Typography>
            }
        </>
    );
};

export default Fixtures;