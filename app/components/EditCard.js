import React,{Component, PropTypes} from 'react';
import CardForm from './CardForm';
import CardStore from '../stores/CardStore';
import DraftStore from '../stores/DraftStore';
import { Container } from 'flux/utils';
import CardActionCreators from '../actions/CardActionCreators';
// Polyfills
import 'babel-polyfill';

class EditCard extends Component{

  componentWillMount(){
    let card = CardActionCreators.getCard(parseInt(this.props.params.card_id));
    this.setState(Object.assign({},card));
  }

  handleChange(field, value){
    CardActionCreators.updateDraft(field, value);
  }

  handleSubmit(e){
    e.preventDefault();
    CardActionCreators.updateCard(CardStore.getCard(parseInt(this.props.params.card_id)), this.state.draft);
    this.props.history.pushState(null,'/');
  }

  handleClose(e){
    this.props.history.pushState(null,'/');
  }

  componentDidMount(){
    setTimeout(()=>{
      CardActionCreators.createDraft(CardStore.getCard(this.props.params.card_id))
    }, 0);
  }

  render(){
    return (
      <CardForm draftCard={this.state.draft}
                buttonLabel="Edit Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
    )
  }
}

EditCard.getStores = () => ([DraftStore]);
EditCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});


export default Container.create(EditCard);
