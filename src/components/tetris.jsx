import React from "react";
import Stage from "./common/stage";
import Display from "./common/display";
import StartButton from "./common/startButton";
import { CreateStage } from "../helpers/stageHelpers";

const Tetris = () => (
  <div>
    <Stage stage={CreateStage()} />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton />
    </aside>
  </div>
);

export default Tetris;
