import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';

let AuthActionCreators = {
    login(username, password) {
        AppDispatcher.dispatchAsync(KanbanAPI.login(username, password), {
            request: constants.USER_LOGIN,
            success: constants.USER_LOGIN_SUCCESS,
            failure: constants.USER_LOGIN_ERROR
        }, { username, password });
    },

    isLogged() {
        AppDispatcher.dispatch({
            type: constants.IS_USER_LOGGED_IN
        });
    },

    logout() {
        AppDispatcher.dispatch({
            type: constants.USER_LOGOUT
        });
    },
};

export default AuthActionCreators;