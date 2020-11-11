import {extend} from "../../../utils.js";
import {ActionType} from "../../action.js";
import questions from "../../../mocks/questions.js";

const inititalState = {
  questions,
};

const gameData = (state = inititalState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};

export {gameData};
