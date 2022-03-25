import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Statistics from './Statistics';
import GameEvents from './GameEvents';
import mockHomeEvents from '../mockApiData/game_home_events.json';
import mockAwayEvents from '../mockApiData/game_away_events.json';
import mockStats from '../mockApiData/game_stats.json';


const ResponsiveDialog = ({open, onClose, fixtureId, infoType, homeTeamId, awayTeamId}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [stats, setStats] = React.useState([]);
    const [homeEvents, setHomeEvents] = React.useState([]);
    const [awayEvents, setAwayEvents] = React.useState([]);


    // get stats or events for a game
    useEffect(() => {
        if(fixtureId === null) return [];

        if(infoType === 'stats') {
            const {response} = mockStats;
            setStats(response);
        } else {
            const { response: homeEvents} = mockHomeEvents;
            const { response: awayEvents} = mockAwayEvents;
            setHomeEvents(homeEvents);
            setAwayEvents(awayEvents);
        }

    }, [fixtureId, infoType, homeTeamId, awayTeamId]);

    return (
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={()=>onClose()}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
            style: {
                width: 800
            }
        }}
        >
            <DialogTitle id="responsive-dialog-title">{infoType=== 'stats' ? 'Statistics' : 'Events'}</DialogTitle>
            <DialogContent dividers style={{height: '500px'}}>
                {infoType === 'stats' ? <Statistics stats={stats}/> : <GameEvents homeEvents={homeEvents} awayEvents={awayEvents}/>}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={()=> onClose()} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ResponsiveDialog;