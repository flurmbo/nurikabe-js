import React, { useState , useRef, useEffect  } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'
import PropTypes from "prop-types";
import TutorialBoard from "./TutorialBoard";

const useStyles = makeStyles(theme => ({
}));

const TutorialStep = props => {
  const { stepContent, setSolved } = props;
  const classes = useStyles();
  const [cells, setCells] = useState(() => {
    return stepContent.board.cells
  });


  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(undefined)

  useEffect(() => {
    const resizeHandler = () => {
      setContainerWidth(containerRef.current.clientWidth);
    }
    resizeHandler();

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  const handleClick = (index) => {
    if (index === stepContent.answer) {
      setSolved();
    }
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={6}>
      <Typography
      >
        {stepContent.text}
      </Typography></Grid>
      <Grid item xs={6} ref={containerRef}>
        {containerWidth &&
        <TutorialBoard
        cells={stepContent.board.cells}
        height={stepContent.board.height}
        width={stepContent.board.width}
        containerWidth={containerWidth}
        handleClick={handleClick}
      />}
      </Grid>
      
      </Grid>
    </React.Fragment>
  );
};

TutorialStep.propTypes = {
  stepContent: PropTypes.object
};

export default TutorialStep;
