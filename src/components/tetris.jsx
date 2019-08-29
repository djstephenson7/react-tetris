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

  const [player, updatePlayerPos, resetPlayer] = UsePlayer();
  const [stage, setStage] = UseStage(player);

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 1, collided: false });
  };

  const startGame = () => {
    // Reset everything
    setStage(CreateStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
