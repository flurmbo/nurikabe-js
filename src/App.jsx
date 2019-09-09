import React, { useState, useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import NurikabeBoard from "./components/NurikabeBoard";
import AboutSection from "./components/AboutSection";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    },
    '&.enter': {
      opacity: 0,
      'z-index': 1
  },
  '&.enter.enter-active': {
      opacity: 1,
      transition: 'opacity 100ms linear 100ms'
  },
  '&.exit': {
      opacity: 1
  },
  '&.exit.exit-active': {
    opacity: 0,
    transition: 'opacity 100ms linear'
}
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}));

function App() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [cells, setCells] = useState(() => {
    const cells = new Array(9);
    return cells.fill({ filled: false });
  });
  const contentRef = useRef(null);

  useEffect(() => {
    console.log(contentRef.current.clientHeight)
  }, [tab])
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
          Nurikabe (ぬりかべ)!
          </Typography>
          <Button color="inherit" onClick={() => setTab(0)}>
            Play
          </Button>
          <Button color="inherit" onClick={() => setTab(1)}>
            Tutorial
          </Button>
          <Button color="inherit" onClick={() => setTab(2)}>
            About
          </Button>
        </Toolbar>
      </AppBar>
      <SwitchTransition mode='out-in'>
      <CSSTransition
        key={tab}
        timeout={200}
        className={classes.layout}
      >
      <main ref={contentRef}>
        <Paper className={classes.paper}>
          {tab === 0 && (
            <NurikabeBoard
              height={3}
              width={3}
              cells={cells}
              setCells={setCells}
            />
          )}
          {tab === 1 && <Tutorial />}
          {tab === 2 && <AboutSection />}
        </Paper>

      </main>

    </CSSTransition>

    </SwitchTransition>
      
    <Footer />
      </div>
  );
}

export default App;
