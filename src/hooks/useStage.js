import { useState, useEffect } from "react";
import { CreateStage } from "../helpers/stageHelpers";

export const UseStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(CreateStage());

  useEffect(() => {
    const updateStage = prevStage => {
      // Flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Draw the tetromino.
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`
            ];
          }
        });
      });
      // Then check if we collided.
      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
};
