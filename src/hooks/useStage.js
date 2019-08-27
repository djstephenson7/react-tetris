import { useState } from "react";
import { CreateStage } from "../helpers/stageHelpers";

export const UseStage = () => {
  const [stage, setStage] = useState(CreateStage());

  return [stage, setStage];
};
