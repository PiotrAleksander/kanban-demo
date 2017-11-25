import React, { Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import AuthStore from '../stores/AuthStore';

const Authorization = (allowedRoles) =>
    (WrappedComponent) => {
        return class WithAuthorization extends Component {
            constructor(props) {
                super(props);
            }

            render() {
                const history = createBrowserHistory();
                const { role } = AuthStore.role;
                if (allowedRoles.includes(role)) {
                    return <WrappedComponent {...this.props} />
                } else {
                    history.push('/login');
                }
            }
        }
    }