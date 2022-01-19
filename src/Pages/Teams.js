import React, { useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import Grid from '@material-ui/core/Grid';
import teamsAPI from '../mockApiData/teams.json';

const Teams = () => {
    const [teams, setTeams] = React.useState([]);

    useEffect(() => {
        const {response } = teamsAPI;
        setTeams(response);
    }, []);

    return (
        <div>
            <Grid container spacing={2}>      
            {teams.map(team => (
                <Grid item xs={12} sm={4} key={team.team.id}>
                    <TeamCard teamData={team}/>
                </Grid>
            ))}
           </Grid>
        </div>
    );
};

export default Teams;