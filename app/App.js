import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import KanbanBoardContainer from './components/KanbanBoardContainer';
import KanbanBoard from './components/KanbanBoard';
import EditCard from './components/EditCard';
import NewCard from './components/NewCard';

const Consultant = Authorization(['consultant', 'advisor', 'manager']);
const Advisor = Authorization(['advisor', 'manager']);
const Manager = Authorization(['manager']);

render((
  <MuiThemeProvider>
    <Router history={createBrowserHistory()}>
      <Route component={KanbanBoardContainer}>
        <Route path="/" component={Advisor(KanbanBoard)}>
          <Route path="new" component={Consultant(NewCard)} />
          <Route path="edit/:card_id" component={Advisor(EditCard)} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
