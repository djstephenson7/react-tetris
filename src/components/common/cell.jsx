import React from "react";
import { StyledCell } from "../styles/styledCell";
import { Tetrominos } from "../../helpers/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={"L"} colour={Tetrominos["L"].colour} />
);

export default Cell;
