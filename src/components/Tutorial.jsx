import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Step from "@material-ui/core/Step"
import Button from "@material-ui/core/Button"
import { tutorialContent } from '../utils'
import TutorialStep from './TutorialStep';
const useStyles = makeStyles(theme => ({
  continue: {
    float: 'right'
  },
  previous: {
    float: 'left'
  },
  clear: {
    clear: 'both'
  }
}));

const Tutorial = props => {
  console.log(tutorialContent[0])
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [solvedSteps, setSolvedSteps] = useState(() => {
    return new Array(tutorialContent.length).fill(false);
  });
  const setThisStepSolved = function() {
    console.log(this.index)
    setSolvedSteps(prevSolvedSteps => {
      const newSolvedSteps = [...prevSolvedSteps]
      newSolvedSteps[this.index] = true
      return newSolvedSteps
      // return prevSolvedSteps.map((value, index) => {
      //   return index === this.index ? true : prevSolvedSteps[index];
      // })
    })
  }

  const getStepContent = (index) => {
    return (
      <TutorialStep 
        stepContent={tutorialContent[index]}
        setSolved={setThisStepSolved.bind({index})}  
      />
    )
  };
  console.log(solvedSteps);
  const steps = [0,1,2];
  return (
    <React.Fragment>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        <Button
          onClick={() => setActiveStep(1)}
          className={classes.previous}
          color="primary"
        >
          Previous
          </Button>  
        <Button
          onClick={() => setActiveStep(1)}
          className={classes.continue}
          color="primary"
          disabled={!solvedSteps[activeStep]}
        >
          Continue
          </Button>      
        <div className={classes.clear}/>
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
