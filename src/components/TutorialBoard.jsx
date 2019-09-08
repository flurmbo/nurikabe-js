import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  boardContainer: {
    margin: "0 auto",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    boxSizing: "border-box",
    height: props => props.cellLength * props.height + 1,
    width: props => props.cellLength * props.height + 1
  },
  boardCell: {
    width: props => props.cellLength,
    height: props => props.cellLength,
    boxSizing: "border-box",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding: 0,
    margin: 0,
    backgroundColor: props => props.color,
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const TutorialBoard = props => {
  const classes = useStyles({ ...props, cellLength: Math.floor(props.containerWidth * .7 / props.width)});
  const { cells, height, width, handleClick } = props;
  
  return (
    <React.Fragment>
    <div className={classes.boardContainer}>
      {cells.map((cell, index) => {
        return (
          <div
            className={classes.boardCell}
            style={cell.filled ? {backgroundColor: "rgb(33,62,92)"} : {}}
            key={index}
            onClick={() => handleClick(index)}
          >
            {cell.type === 'number' && cell.value}
          </div>
        );
      })}
    </div>
    </React.Fragment>
  );
};

TutorialBoard.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  cells: PropTypes.array,
  setChoice: PropTypes.func
};

export default TutorialBoard;
