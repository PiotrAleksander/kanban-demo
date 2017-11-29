import React, { Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import AuthActionCreators from '../actions/AuthActionCreators';

export const Authorization = (allowedRoles) =>
    (WrappedComponent) => {
        return class WithAuthorization extends Component {
            constructor(props) {
                super(props);
                this.state.role = '';
            }

            getRole() {
                this.state.role = AuthActionCreators.getRole();
            }

            render() {
                const history = createBrowserHistory();
                if (allowedRoles.includes(this.state.role)) {
                    return <WrappedComponent {...this.props} />
                } else {
                    history.push('/home');
                }
            }
        }
    }