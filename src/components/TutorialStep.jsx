import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
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

  const handleClick = (index) => {
    if (index === stepContent.answer) {
      setSolved();
    }
  }
  return (
    <React.Fragment>
      <Typography
      >
        {stepContent.text}
      </Typography>
      <TutorialBoard
        cells={stepContent.board.cells}
        height={stepContent.board.height}
        width={stepContent.board.width}
        handleClick={handleClick}
      />
      
    </React.Fragment>
  );
};

TutorialStep.propTypes = {
  stepContent: PropTypes.object
};

export default TutorialStep;
