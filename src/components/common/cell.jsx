import React from "react";
import { StyledCell } from "../styles/styledCell";
import { Tetrominos } from "../../helpers/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} colour={Tetrominos[type].colour} />
);

export default Cell;
