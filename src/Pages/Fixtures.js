import React, { useEffect } from 'react';
import { getFixtures } from '../api/fixures';
import { useRouter } from '../hooks/useRouter';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FixtureCard from '../components/FixtureCard';
import { useDates } from '../hooks/useDates';
import { useTheme } from '@material-ui/core';
import WeekSelectionButtons from '../components/WeekSelectionButtons';


const Fixtures = () => {
    const [fixtures, setFixtures] = React.useState([]);
    const { query } = useRouter();
    const { from, to, getPreviousDates, getNextDates, fromView, toView, setFrom, setTo } = useDates({from:null, to:new Date()});
    const theme = useTheme();
    
    useEffect(() => {
        const {team} = query;

        getFixtures({params: {team, season: '2021', league: 39, from:fromView, to:toView}})
        .then(apiResponse => {
            const {data: {response}} = apiResponse;
            setFixtures(response);
        })
        .catch(error => console.log(error))
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