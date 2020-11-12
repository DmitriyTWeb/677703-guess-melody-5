import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import GameScreen from "../game-screen/game-screen";
import PrivateRoute from "../private-route/private-route";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import WinScreen from "../win-screen/win-screen";
import {MAX_MISTAKE_COUNT} from "../../const.js";
import {AppRoute} from "../../const.js";
import browserHistory from "../../browser-history.js";


const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(AppRoute.GAME)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact
          path={AppRoute.LOGIN}
          render={({history}) => (
            <AuthScreen
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={({history}) => (
            <WinScreen
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route exact
          path={AppRoute.LOSE}
          render={({history}) => (
            <GameOverScreen
              onReplayButtonClick={() => history.push(AppRoute.GAME)}
            />
          )}
        />
        <Route exact path={AppRoute.GAME}>
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
