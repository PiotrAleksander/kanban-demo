import React, {Component, PropTypes} from 'react';

class CardForm extends Component {

  handleChange(field, e){
    this.props.handleChange(field, e.target.value);
  }

  handleClose(e){
    e.preventDefault();
    this.props.handleClose();
  }

  render(){
    return (
      <div>
        <div className="card big">
          <form onSubmit={this.props.handleSubmit.bind(this)}>
  	        <input type='text'
                   value={this.props.draftCard.name}
                   onChange={this.handleChange.bind(this,'name')}
                   placeholder="Imię"
                   required={true}
                   autoFocus={true} /><br />
  	        <input type='text'
                   value={this.props.draftCard.surname}
                   onChange={this.handleChange.bind(this,'surname')}
                   placeholder="Nazwisko"
                   required={true} /><br />
  	        <input type='text'
                   value={this.props.draftCard.telephone}
                   onChange={this.handleChange.bind(this,'telephone')}
                   placeholder="Telefon"
                   required={true}
                   pattern="[0-9]{9}" /><br />
  	        <input type='text'
                   value={this.props.draftCard.nip}
                   onChange={this.handleChange.bind(this,'nip')}
                   placeholder="NIP"
                   required={true}
                   pattern="[0-9]{10}" /><br />
            <textarea value={this.props.draftCard.comments}
                      onChange={this.handleChange.bind(this,'comments')}
                      placeholder="Komentarze"
                      required={true} /><br />
  	        <input type='email'
                   value={this.props.draftCard.advisor}
                   onChange={this.handleChange.bind(this,'advisor')}
                   placeholder="NIP"
                   required={true} /><br />
            <label htmlFor="status">Status</label>
            <select id="status"
                    value={this.props.draftCard.status}
                    onChange={this.handleChange.bind(this,'status')}>
              <option value="registration">Rejestracja</option>
              <option value="offering">Oferta</option>
              <option value="decision">Decyzja</option>
              <option value="settlement">Umowa</option>
              <option value="payment">Wypłata</option>
            </select>
            <br />
            <label htmlFor="color">Color</label>
            <input id="color"
                   value={this.props.draftCard.color}
                   onChange={this.handleChange.bind(this,'color')}
                   type="color"
                   defaultValue="#ff0000" />

            <div className='actions'>
              <button type="submit">{this.props.buttonLabel}</button>
            </div>
          </form>
        </div>
        <div className="overlay" onClick={this.handleClose.bind(this)}>
        </div>
      </div>
    );
  }
}

CardForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  draftCard: PropTypes.shape({
    amount: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    telephone: PropTypes.number,
    email: PropTypes.email,
    nip: PropTypes.number,
    status: PropTypes.string,
    color: PropTypes.string,
    comments: PropTypes.string,
    advisor: PropTypes.email
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default CardForm;
