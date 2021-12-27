import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useRouter } from '../hooks/useRouter';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      backgroundColor: '#ff2982',
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      height: theme.spacing(25)
    },
}));

const mainFeaturedPost = {
    live: {
        text: 'Live Scores'
    },
    fixtures: {
        text: 'Fixtures'
    },
    standings: {
        text: 'Standings'
    },
    teams: {
        text: 'Teams'
    },
    leagues: {
        text: 'Leagues'
    }
    
};

const HeaderBanner = () => {
    const classes = useStyles();
    const router = useRouter();
    const {pathname} = router;

    const getTitle = useCallback((pathname) => {
        switch(pathname) {
            case '/live':
                return mainFeaturedPost.live.text;
            case '/fixtures':
                return mainFeaturedPost.fixtures.text;
            case '/standings': 
                return mainFeaturedPost.standings.text;
            case '/teams':
                return mainFeaturedPost.teams.text;
            case '/leagues':
                return mainFeaturedPost.leagues.text;
            default:
                return mainFeaturedPost.live.text;
        }
    }, []);

    return (
        <Paper className={classes.mainFeaturedPost} >
            <Grid container alignItems='center' justifyContent='center' style={{height:'inherit'}}>
                <Grid item>
                    <Typography variant="h3" gutterBottom>{getTitle(pathname)}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default HeaderBanner;