import React, { useState } from "react";
import Stage from "./common/stage";
import Display from "./common/display";
import StartButton from "./common/startButton";
import { UsePlayer } from "../hooks/usePlayer";
import { UseStage } from "../hooks/useStage";
import { CreateStage } from "../helpers/stageHelpers";
import {
  StyledTetrisWrapper,
  StyledTetris
} from "./styles/styledTetrisWrapper";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = UsePlayer();
  const [stage, setStage] = UseStage(player);

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"}></Display>
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
