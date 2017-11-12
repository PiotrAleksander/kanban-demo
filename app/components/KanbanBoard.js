import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Link } from 'react-router';
import List from './List';

class KanbanBoard extends Component {
  render(){
    return (
      <div className="app">
        <Link to='/new' className="float-button">+</Link>

        <List id='registration'
              title="Rejestracja"
              cards={this.props.cards.filter((card) => card.status === "registration")} />
        <List id='offering'
              title="Oferta"
              cards={this.props.cards.filter((card) => card.status === "offering")} />
        <List id='decision'
              title='Decyzja'
              cards={this.props.cards.filter((card) => card.status === "decision")} />
        <List id='settlement'
              title='Umowa'
              cards={this.props.cards.filter((card) => card.status === "settlement")} />
        <List id='payment'
              title='Wypłata'
              cards={this.props.cards.filter((card) => card.status === "payment")} />

            {this.props.children}
      </div>
    );
  }
};
KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default DragDropContext(HTML5Backend)(KanbanBoard);
