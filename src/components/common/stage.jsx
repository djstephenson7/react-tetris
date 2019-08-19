import React from "react";
import Cell from "./cell";

const Stage = ({ stage }) => {
  return (
    <div>
      <Cell>
        {stage.map(row =>
          row.map((cell, x) => <Cell key={x} type={cell[0]} />)
        )}
      </Cell>
    </div>
  );
};

export default Stage;
