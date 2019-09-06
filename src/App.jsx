import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import NurikabeBoard from './components/NurikabeBoard'
import './App.css';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },title: {
    flexGrow: 1,
  },
  toolbar: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

  }
}));

function App() {
  const classes = useStyles();
  const [cells, setCells] = useState(() => {
    const cells = new Array(9);
    return cells.fill({filled: false});
  });

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
            ぬりかべ (Nurikabe)
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      <main className={classes.layout}>
              
        <Paper className={classes.paper}>

          <NurikabeBoard height={3} width={3} cells={cells} setCells={setCells}/>
        </Paper>
      </main>
    </div>
  );
}

export default App;
