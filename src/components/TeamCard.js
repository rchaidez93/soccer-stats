import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useRouter } from '../hooks/useRouter';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    mediaRoot: {
        backgroundSize: 'contain',
    },
    cardRoot: {
        backgroundColor: '#552758'
    }
  });

const TeamCard = ({teamData}) => {
    const classes = useStyles();
    const {team} = teamData;

    const router = useRouter();

    return (
        <Card className={classes.root}
        classes={{
            root: classes.cardRoot
        }}
        >
            <CardActionArea onClick={() => router.push(`/fixtures?team=${team.id}`)}>
            <CardMedia
                className={classes.media}
                image={team.logo}
                title={team.name}
                classes={{
                    root: classes.mediaRoot,
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align="center" noWrap>
                    {team.name}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default TeamCard;