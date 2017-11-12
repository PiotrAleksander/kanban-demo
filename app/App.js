import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import KanbanBoardContainer from './components/KanbanBoardContainer';
import KanbanBoard from './components/KanbanBoard';
import EditCard from './components/EditCard';
import NewCard from './components/NewCard';

render((
  <MuiThemeProvider>
    <Router history={createBrowserHistory()}>
      <Route component={KanbanBoardContainer}>
        <Route path="/" component={KanbanBoard}>
          <Route path="new" component={NewCard} />
          <Route path="edit/:card_id" component={EditCard} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
