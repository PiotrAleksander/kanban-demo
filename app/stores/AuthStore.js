import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import { ReduceStore } from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

class AuthStore extends ReduceStore {

    getInitialState() {
        this.jwt = localStorage.getItem('jwt');
        this.user = this.parseJwt();
        this.error = false;
        this.loading = false;
    }

    reduce(state, action) {
        switch (action.actionType) {
            case constants.USER_LOGIN:
                return update(this.getState(), {
                    loading: { $set: true }
                });

            case constants.USER_LOGIN_SUCCESS:            
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

    // getters for the properties it got from the action.
    get user() {
        return this.user;
    }

    get role() {
        return this.user.role;
    }

    get jwt() {
        return this.jwt;
    }

    isLoggedIn() {
        return !!this.user;
    }

    parseJwt() {
        if (this.jwt === null) { return null; }
        return JSON.parse(atob(this.jwt.split('.')[1]));
    }
}
export default new AuthStore();