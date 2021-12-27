import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { KeyboardDatePicker } from "@material-ui/pickers";


const CustomDatePicker = ({
    fromView: fromViewProp,
    toView:toViewProp,
    onFrom,
    onTo
}) => {

    return (
        <Box p={4}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <KeyboardDatePicker
                    fullWidth
                    inputValue={fromViewProp}
                    inputVariant="outlined"
                    onChange={(newDate, newDateValue) => {
                        onFrom(new Date(newDateValue));
                    }}
                    label="From"
                    format="YYYY-MM-DD"
                    size="small"
                    />
                </Grid>
                <Grid item>
                    <KeyboardDatePicker
                    fullWidth
                    inputValue={toViewProp}
                    inputVariant="outlined"
                    onChange={(newDate, newDateValue) => {
                        onTo(new Date(newDateValue));
                    }}
                    label="To"
                    format="YYYY-MM-DD"
                    size="small"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CustomDatePicker;