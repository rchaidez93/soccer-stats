import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Avatar from '@material-ui/core/Avatar';
import { useMemo } from 'react';

export default function GameEvents({homeEvents, awayEvents}) {

    const team1 = useMemo(() => {
        if(homeEvents.length < 1) return false;

        return {
            logo : homeEvents[0].team.logo,
            name : homeEvents[0].team.name,
        }

    } , [homeEvents]);
    const team2 = useMemo(() => {
        if(awayEvents.length < 1) return false;
        
        return {
            logo : awayEvents[0].team.logo,
            name : awayEvents[0].team.name,
        }
    } , [awayEvents]);

    const getEventType = React.useCallback((event) => {
           if(event.type === 'Goal') {
                return (
                    <Box>
                    <Typography variant='body2'>
                        {event.type}
                    </Typography>
                    <Typography variant='caption'>
                        {event.player.name}
                    </Typography>
                    </Box>
                );
           } else if(event.type === 'Card'){
            return (
                <Box>
                <Typography variant='body2'>
                    {event.detail}
                </Typography>
                <Typography variant='caption'>
                    {event.player.name}
                </Typography>
                </Box>
            );
           } else if(event.type === 'Subst') {
                return 'Substitution';
           } else { //Var
                return(
                    <Box>
                <Typography variant='body2'>
                    {event.type}
                </Typography>
                <Typography variant='caption'>
                    {event.detail}
                </Typography>
                </Box>
                ) 
           }
    }, []);

  return (
    <>
    {(homeEvents && awayEvents) ? (
        <Grid
        container 
        direction="row" 
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{height: 'inherit'}}
        >
            <Grid item xs={6} style={{height:'100%'}}>
                <Box alignItems="center" style={{textAlign:'center'}}>
                    <Avatar alt="home" src={team1.logo} style={{margin:'auto'}}/>
                    {team1.name}
                </Box>
                <Timeline position="left">
                    {homeEvents.map((event, index)=> {
                        const eventDetails = getEventType(event)
                        return(
                            <TimelineItem key={index}>
                                <TimelineOppositeContent >
                                    {event.time.elapsed}"
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>{eventDetails}</TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            </Grid>
            <Grid item xs={6} style={{height:'100%'}}>
                <Box alignItems="center" style={{textAlign:'center'}}>
                    <Avatar alt="home" src={team2.logo} style={{margin:'auto'}}/>
                    {team2.name}
                </Box>
                <Timeline position="right">
                    {awayEvents.map((event, index)=> {
                        const eventDetails = getEventType(event)
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent>
                                    {event.time.elapsed}"
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>{eventDetails}</TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            </Grid>
        </Grid>
    ) : (
        <div>Loading...</div>
    )}
    </>
  );
}
