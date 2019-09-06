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
    float: "left"
  }
}));

const NurikabeBoard = props => {
  const classes = useStyles();
  const { cells, setCells, height, width } = props;

  const toggle = function() {
    console.log(this)
    setCells(prevCells => {
      return prevCells.map((cell, index) => {
        return index === this.index ? {filled: !prevCells[index].filled} : prevCells[index]
      })
    })
  }
  return (
    <div className={classes.boardContainer} style={{height: height * 30 + 1, width: width * 30 + 1}}>
      {cells.map((cell, index) => {
        return (
          <div
            className={classes.boardCell}
            style={{ backgroundColor: cell.filled ? "blue" : "white" }}
            onClick={toggle.bind({index})}
            onDoubleClick={() => {console.log('double click')}}
            key={index}
          />
        );
      })}
    </div>
  );
};

NurikabeBoard.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  cells: PropTypes.array,
  setCells: PropTypes.func
};

export default NurikabeBoard;
