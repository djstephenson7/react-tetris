export const stageWidth = 12;
export const stageHeight = 20;

export const CreateStage = () =>
  Array.from(Array(stageHeight), () =>
    new Array(stageWidth).fill([0, "clear"])
  );
