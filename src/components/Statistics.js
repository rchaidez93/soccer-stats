import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const Statistics = ({stats}) => {
    //first element is first team
    const team1 = useMemo(() => {
        if(stats.length < 1) return false;
        const teamData = stats[0];
        const logo = teamData.team.logo;
        const {statistics} = teamData;

        return {
            logo,
            name : teamData.team.name,
            shotsOnGoal : statistics.filter(stat=>stat.type === 'Shots on Goal')[0].value,
            totalShots : statistics.filter(stat=>stat.type === 'Total Shots')[0].value,
            fouls : statistics.filter(stat=>stat.type === 'Fouls')[0].value,
            yellowCards : statistics.filter(stat=>stat.type === 'Yellow Cards')[0].value,
            redCards : statistics.filter(stat=>stat.type === 'Red Cards')[0].value,
            saves : statistics.filter(stat=>stat.type === 'Goalkeeper Saves')[0].value,
        }
    }, [stats]);
    //second element is second team
    const team2 = useMemo(() => {
        if(stats.length < 1) return false;
        const teamData = stats[1];
        const logo = teamData.team.logo;
        const {statistics} = teamData;
        
        return {
            logo,
            name : teamData.team.name,
            shotsOnGoal : statistics.filter(stat=>stat.type === 'Shots on Goal')[0].value,
            totalShots : statistics.filter(stat=>stat.type === 'Total Shots')[0].value,
            fouls : statistics.filter(stat=>stat.type === 'Fouls')[0].value,
            yellowCards : statistics.filter(stat=>stat.type === 'Yellow Cards')[0].value,
            redCards : statistics.filter(stat=>stat.type === 'Red Cards')[0].value,
            saves : statistics.filter(stat=>stat.type === 'Goalkeeper Saves')[0].value,
        }
    }, [stats]);

    return (
        <>
        {team1 && team2 ? (
            <Grid
            container 
            direction="row" 
            justifyContent="space-evenly"
            alignItems="flex-start"
            style={{height: 'inherit'}}
            >
                <Grid item style={{height:'100%'}}>
                    <Grid container direction="column" spacing={10}>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Avatar alt="home" src={team1.logo} style={{margin:'auto'}}/>
                                {team1.name}
                            </Box>
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team1.shotsOnGoal ? team1.shotsOnGoal : 0}/{team1.totalShots ? team1.totalShots : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Shots on Goal/Total Shots
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team1.fouls ? team1.fouls : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Fouls
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team1.yellowCards ? team1.yellowCards : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Yellow
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team1.redCards ? team1.redCards : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Red Cards
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team1.saves ? team1.saves : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Saves
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider style={{height: 'inherit'}} orientation="vertical"/>
                <Grid item style={{height:'100%'}}>
                    <Grid container direction="column" spacing={10}>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Avatar alt="home" src={team2.logo} style={{margin:'auto'}}/>
                                {team2.name}
                            </Box>
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team2.shotsOnGoal ? team2.shotsOnGoal : 0}/{team2.totalShots ? team2.totalShots : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Shots on Goal/Total Shots
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team2.fouls ? team2.fouls : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Fouls
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team2.yellowCards ? team2.yellowCards : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Yellow
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team2.redCards ? team2.redCards : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Red Cards
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box alignItems="center" style={{textAlign:'center'}}>
                                <Typography variant="h4" component="div">
                                {team2.saves ? team2.saves : 0}
                                </Typography>
                                <Typography variant="caption">
                                    Saves
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        ) 
        : <Typography>Loading</Typography>
        }
        </>
    );
};

export default Statistics;