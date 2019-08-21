import React from "react";
import Stage from "./common/stage";
import Display from "./common/display";
import StartButton from "./common/startButton";
import { CreateStage } from "../helpers/stageHelpers";
import {
  StyledTetrisWrapper,
  StyledTetris
} from "./styles/styledTetrisWrapper";

const Tetris = () => (
  <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={CreateStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
);

export default Tetris;
