import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import standingsPL21 from '../mockApiData/pl_standings_21.json';
import { getStandings } from '../api/standings';

const columns = [
    { 
        field: 'logo', 
        width: 20, 
        sortable: false, 
        headerAlign: 'center',
        align:'center',
        renderHeader: () => (
            <strong>
              <span>
                
              </span>
            </strong>
        ),
        renderCell: (params) => {
            return (
                <img src={params.value} alt="team-logo" style={{width: '100%'}}/>
            )
        }
    },
    { field: 'name', headerName: 'Name', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'id', headerName: 'Rank', type: 'number', width: 150, headerAlign: 'center', align: 'center'},
    { field: 'wins', headerName: 'Wins', type: 'number', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'draws', headerName: 'Draws', type: 'number', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'lost', headerName: 'Lost', type: 'number', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'points', headerName: 'Points', type: 'number', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'goalDiff', headerName: 'Goal Diff', type: 'number', width: 150, headerAlign: 'center', align: 'center' },
  ];
  

const Standings = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        getStandings({params: {league: 39, season:2021}})
        .then(({data}) => {
            // const {response } = standingsPL21;
            const {league: {standings}} = data.data.response[0];
            if(standings[0].length > 0) {
                const plStandings = standings[0].map(team => {
                    return {
                        logo: team.team.logo,
                        id: team.rank,
                        name: team.team.name,
                        wins: team.all.win,
                        draws: team.all.draw,
                        lost: team.all.lose,
                        points: team.points,
                        goalDiff: team.goalsDiff
                    }
                });
                setData(plStandings);
            }
        })
    }, []);

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                style={{backgroundColor: '#808080'}}
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableColumnMenu
                disableRowSelect
            />
        </div>
    );
};

export default Standings;