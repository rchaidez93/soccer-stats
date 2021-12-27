import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const StyledButton = ({text, onClick}) => {
    return (
      <Box p={1} width="100%">
        <Button variant="outlined" onClick={onClick} fullWidth size="small">{text}</Button>
      </Box>
    );
};

export default StyledButton;