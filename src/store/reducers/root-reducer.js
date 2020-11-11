import {combineReducers} from "redux";
import {gameProcess} from "./game-process/game-process";
import {gameData} from "./game-data/game-data.js";
import {user} from "./user/user.js";

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
  [NameSpace.USER]: user,
});
