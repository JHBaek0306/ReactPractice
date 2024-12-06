import { useReducer } from "react";

type Action = { type: "correct" } | { type: "incorrect" };

const scoreReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "correct":
      return state + 1;
    case "incorrect":
      return state;
    default:
      return state;
  }
};

const useScore = () => {
  const [score, dispatch] = useReducer(scoreReducer, 0);

  const updateScore = (isCorrect: boolean) => {
    dispatch({ type: isCorrect ? "correct" : "incorrect" });
  };

  return { score, updateScore };
};

export default useScore;
