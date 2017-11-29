import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import { ReduceStore } from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

class AuthStore extends ReduceStore {

    getInitialState() {
        return [];
    }

    // getters for the properties it got from the action.
    getUser() {
        return this._state.user;
    }

    getRole() {
        return this._state.user.role;
    }

    getJwt() {
        return this._state.jwt;
    }

    isLoggedIn() {
        return !!this._state.user;
    }

    parseJwt() {
        if (this.jwt === null) { return null; }
        return JSON.parse(atob(this.jwt.split('.')[1]));
    }


    reduce(state, action) {
        switch (action.actionType) {
            case constants.IS_USER_LOGGED_IN:
                return this.isLoggedIn();

            case constants.USER_LOGIN:
                return update(this.getState(), {
                    loading: { $set: true }
                });

            case constants.USER_LOGIN_SUCCESS:
                $window.sessionStorage.accessToken = response.body.access_token;
                return update(this.getState(), {
                    jwt: { $set: action.payload.response.jwt },
                    user: { $set: this.parseJwt() },
                    error: { $set: false },
                    loading: { $set: false }
                });

            case constants.USER_LOGIN_ERROR:
                return update(this.getState(), {
                    error: { $set: true }
                });

            case constants.USER_LOGOUT:
                return update(this.getState(), {
                    jwt: { $set: "" },
                    user: { $set: "" },
                    error: { $set: false },
                    loading: { $set: false }
                });

            default:
                return state;
        };
    }
}

export default new AuthStore(AppDispatcher);