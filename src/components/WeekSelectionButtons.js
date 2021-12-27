import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, useTheme } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CustomDatePicker from './CustomDatePicker';
import Popover from '@material-ui/core/Popover';


const WeekSelectionButtons = ({onPreviousDates, onNextDates, from, to, fromView, toView, onFromChange, onToChange}) => {

    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
        <div style={{borderStyle:'solid', borderColor: 'lightgrey'}}>
            <div style={{margin:'16px'}}>
                <Grid container>
                    <ButtonGroup variant="contained" color="default" >
                        <Button variant="contained" onClick={()=>onPreviousDates(from)}>
                            <ArrowLeftIcon />
                        </Button>
                        <Button onClick={handleClick}>
                            <QueryBuilderIcon/>
                        </Button>
                        <Button variant="contained" onClick={()=> onNextDates(to)}>
                           <ArrowRightIcon />
                        </Button>
                    </ButtonGroup>
                    <Box display="flex" flexGrow={1} justifyContent="flex-end" alignItems="center">
                        <Typography style={{color:theme.palette.text.primary}}>{fromView} to {toView}</Typography>
                    </Box>
                </Grid>
            </div>
        </div>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        >
            <CustomDatePicker from={from} to={to} fromView={fromView} toView={toView} onFrom={onFromChange} onTo={onToChange}/>
        </Popover>
      </>
    );
};

export default WeekSelectionButtons;