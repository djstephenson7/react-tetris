export const stageWidth = 12;
export const stageHeight = 20;

export const createStage = () =>
  Array.from(Array(stageHeight), () =>
    new Array(stageWidth).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check we're on a Tetromino cell.
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game area's height (y).
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game area's width (x).
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check the cell we're moving to isn't set to clear.
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
