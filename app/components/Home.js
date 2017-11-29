import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthActionCreators from '../actions/AuthActionCreators';
import AuthStore from '../stores/AuthStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        username: '',
        password: '',
        error: false
      }
  }

  componentDidMount () {
    AuthActionCreators.isLogged();
  }

  _onAuthChange(auth) {
    this.setState(auth);

    if(this.state.loggedIn){
      history.push('/board');
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    AuthActionCreators.login(
      this.state.username,
      this.state.password
    );
  }

  render() {
    var errorMessage;
    if (this.state && this.state.error) {
      errorMessage = (
        <div className='state-error' style={{ paddingBottom: 16 }}>
          { this.state.error }
        </div>
      );
    }

    return (
      <div>
        { errorMessage }
        <MuiThemeProvider>
        <div>
        <AppBar
           title="Login"
         />
         <TextField
           hintText="Podaj login/email"
           floatingLabelText="Login"
           onChange = {(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Podaj hasło"
             floatingLabelText="Hasło"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={{margin: 15}} onClick={(event) => this.handleSubmit(event)}/>
       </div>
       </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;