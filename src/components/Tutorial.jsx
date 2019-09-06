import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import TutorialBoard from "./TutorialBoard";
import { tutorialBoards } from '../utils'

const useStyles = makeStyles(theme => ({
}));

const Tutorial = props => {
  const classes = useStyles();
  const [cells, setCells] = useState(() => {
    return tutorialBoards[0]
  });
  const [choice, setChoice] = useState(undefined)
  return (
    <React.Fragment>
      <Typography>
        The puzzle below is almost complete. All that is left is to fill in one of the highlighted cells 
        so the the '5' in the bottom-left corner is complete. Which one should be filled
        so that the sea stays connected?
      </Typography>
      <TutorialBoard
        cells={cells}
        setChoice={setChoice}
        height={4}
        width={4}
      />
      <div>
      { choice === 0 && 'wrong!'}
      { choice === 5 && 'right!'}
      </div>
      
    </React.Fragment>
  );
};

Tutorial.propTypes = {
  // height: PropTypes.number,
  // width: PropTypes.number,
  // cells: PropTypes.array,
  // setCells: PropTypes.func
};

export default Tutorial;
