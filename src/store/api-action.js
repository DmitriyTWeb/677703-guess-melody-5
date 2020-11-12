import {loadQuestions, requireAuthorization, redirectToRoute} from "./action.js";
import {AuthorizationStatus} from "../const.js";
import {AppRoute, APIRoute} from "../const.js";

export const fetchQuestionsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
);
