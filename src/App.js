import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { 
  BrowserRouter as Router,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from "moment";


function App() {

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
        },
        overrides: {
          // Style sheet name ⚛️
          MuiButton: {
            // Name of the rule
            root: {
              // Some CSS
              borderRadius: 16,
              width: '100%'
            },
          },
        },
      }),
    [],
  );
  return (
    <div >
      <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <Router >
        <Home/>
      </Router>
      </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
