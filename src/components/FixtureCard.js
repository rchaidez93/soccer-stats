import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import StyledButton from '../components/StyledButton';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useRouter } from '../hooks/useRouter';
import ResponsiveDialog from './ResponsiveDialog';

const useStyles = makeStyles((theme) => ({
  largeAvatar: {
    margin: 'auto',
    width: theme.spacing(7),
    height: theme.spacing(7),
    cursor:'pointer'
  },
  cardAction: {
    display: 'block', 
    [theme.breakpoints.up("sm")]: {
        display: 'flex', 
        flexDirection: 'column',
    }
  },
  cardRoot: {
    backgroundColor : '#552758'
  }
}));

const FixtureCard = ({teams, score, fixture, league}) => {

    const [open, setOpen] = React.useState(false);
    const [infoType, setInfoType] = React.useState(null);
    const classes = useStyles();
    const router = useRouter();

    return (
        <>
        <Card classes={{
            root: classes.cardRoot
        }}>
            <CardHeader
            title={league.name+', '+league.country}
            subheader={new Date(fixture.timestamp*1000).toUTCString()}
            />
            <div>
                <CardContent>
                    <Grid
                    container
                    direction="row"
                    alignItems="center"
                    >
                        {/* Home */}
                        <Grid item xs={5}>
                            <Grid container alignItems="center" justifyContent="center">
                                <Grid item xs={8}>
                                    <Box alignItems="center" style={{textAlign:'center'}} onClick={() => router.push(`/fixtures?team=${teams.home.id}`)}>
                                        <Avatar alt="home" src={teams.home.logo} className={classes.largeAvatar}/>
                                        <Typography variant="caption">
                                            {teams.home.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid container alignItems="center" justifyContent="center">
                                        <Grid item xs={10} style={{textAlign:'center'}}>
                                            <Typography variant="h3">{score.home}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                        {fixture.status.short==='FT' && teams.home.winner && <ArrowLeftIcon />}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} style={{textAlign:'center'}}>
                            {fixture.status.short !== 'NS'&& (
                                <Box alignItems="center" >
                                    <Typography variant="caption" align="center">{(fixture.status.elapsed !== 90 && fixture.status.elapsed !== null) ? `${fixture.status.elapsed}'` : fixture.status.short}</Typography>
                                </Box>
                            )}
                        </Grid>
                        {/* Away */}
                        <Grid item xs={5}>
                            <Grid container alignItems="center" justifyContent="center">
                                <Grid item xs={4}>
                                    <Grid container alignItems="center" justifyContent="center">
                                        <Grid item xs={2}>
                                            {fixture.status.short==='FT' && teams.away.winner && <ArrowRightIcon />}
                                        </Grid>
                                        <Grid item xs={10} style={{textAlign:'center'}}>
                                            <Typography variant="h3">{score.away}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box alignItems="center" style={{textAlign:'center'}} onClick={() => router.push(`/fixtures?team=${teams.away.id}`)}>
                                        <Avatar alt="away" src={teams.away.logo} className={classes.largeAvatar}/>
                                        <Typography variant="caption">
                                        {teams.away.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </CardContent>
                {fixture.status.short==='FT' ? (<CardActions disableSpacing className={classes.cardAction}>
                    <StyledButton 
                    text="Statistics" 
                    onClick={()=> { 
                        setOpen(true);
                        setInfoType('stats');
                    }}
                    />
                    <StyledButton text="Highlights" onClick={()=> {
                        setOpen(true);
                        setInfoType('highlights');
                    }}
                        />
                </CardActions>
                ) : (
                    <Box width={145} p={1}/>
                )}
            </div>
        </Card>
        {open && (
            <ResponsiveDialog 
            open={open}
            onClose={() => setOpen(false)}
            fixtureId={fixture.id}
            infoType={infoType}
            homeTeamId={teams.home.id}
            awayTeamId={teams.away.id}
            />
        )}
        </>
    );
};

export default FixtureCard;