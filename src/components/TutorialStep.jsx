import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import TutorialBoard from "./TutorialBoard";

const useStyles = makeStyles(theme => ({
}));

const TutorialStep = props => {
  const { stepContent } = props;
  const classes = useStyles();
  const [cells, setCells] = useState(() => {
    return stepContent.board.cells
  });
  const [choice, setChoice] = useState(undefined)
  const [activeStep, setActiveStep] = useState(0)
  return (
    <React.Fragment>
      <Typography>
        {stepContent.text}
      </Typography>
      <TutorialBoard
        cells={stepContent.board.cells}
        setChoice={setChoice}
        height={stepContent.board.height}
        width={stepContent.board.width}
      />
      <div>
      { choice === 0 && 'wrong!'}
      { choice === 5 && 'right!'}
      </div>
      
    </React.Fragment>
  );
};

TutorialStep.propTypes = {
  stepContent: PropTypes.object
};

export default TutorialStep;
