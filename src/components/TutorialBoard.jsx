import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  boardContainer: {
    margin: "0 auto",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    backgroundColor: "green",
    boxSizing: "border-box"
  },
  boardCell: {
    width: "30px",
    height: "30px",
    boxSizing: "border-box",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding: 0,
    margin: 0,
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const TutorialBoard = props => {
  const classes = useStyles();
  const { cells, setChoice, height, width, handleClick } = props;

  return (
    <React.Fragment>
    <div className={classes.boardContainer} style={{height: height * 30 + 1, width: width * 30 + 1}}>
      {cells.map((cell, index) => {
        return (
          <div
            className={classes.boardCell}
            style={{ backgroundColor: cell.filled ? "rgb(33,62,92)" : "white" }}
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
