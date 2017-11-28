import React, { Component } from 'react';
import AuthActionCreators from '../actions/AuthActionCreators';
import AuthStore from '../stores/AuthStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

class Home extends Component {

}

export default Home;

var Login = React.createClass({  
    componentDidMount () {
      this.listenTo(AuthStore, this._onAuthChange);
    },
  
    _onAuthChange(auth) {
      this.setState(auth);
  
      if(this.state.loggedIn){
        history.push('/board');
      }
    },
  
    _handleSubmit(event) {
      event.preventDefault();
  
      AuthActionCreators.login(
        React.findDOMNode(this.refs.username).value,
        React.findDOMNode(this.refs.password).value
      );
    },
  
    render() {
      var errorMessage;
      if (this.state.error) {
        errorMessage = (
          <div className='state-error' style={{ paddingBottom: 16 }}>
            { this.state.error }
          </div>
        );
      }
  
      var formContent;
      if (this.state.user) {
        formContent = (
          <div>
            <p>
              Jesteś zalogowany jako <strong>{ this.state.user.name }</strong>.
            </p>
          </div>
        );
      } else {
        formContent = (
          <div>
            { errorMessage }
            Login: <input ref="username" style={{ maxWidth: "100%" }} type="text" />
            <br/>
            Hasło: <input ref="password" style={{ maxWidth: "100%" }} type="password" />
            <br/>
            <button onClick={ this.handleLogout }>Log In</button>
          </div>
        );
      }
      return (
        <form onSubmit={this._handleSubmit}>
          { formContent }
        </form>
      );
    }
  });
  module.exports = Login;