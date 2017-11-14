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
  	        <input type='number'
                   min="1000"
                   value={this.props.draftCard.amount}
                   onChange={this.handleChange.bind(this,'amount')}
                   placeholder="Kwota"
                   required={true}
                   autoFocus={true} /><br />
  	        <input type='text'
                   value={this.props.draftCard.company}
                   onChange={this.handleChange.bind(this,'company')}
                   placeholder="Firma"
                   required={true} /><br />
  	        <input type='text'
                   value={this.props.draftCard.telephone}
                   onChange={this.handleChange.bind(this,'telephone')}
                   placeholder="Telefon"
                   required={true}
                   pattern="[0-9]{9}" /><br />
  	        <input type='email'
                   value={this.props.draftCard.email}
                   onChange={this.handleChange.bind(this,'email')}
                   placeholder="E-mail"
                   required={true} /><br />
  	        <input type='text'
                   value={this.props.draftCard.nip}
                   onChange={this.handleChange.bind(this,'nip')}
                   placeholder="NIP"
                   required={true}
                   pattern="[0-9]{10}" /><br />
            <textarea value={this.props.draftCard.comments}
                      onChange={this.handleChange.bind(this,'comments')}
                      placeholder="Komentarze" /><br />
  	        <input type='email'
                   value={this.props.draftCard.advisor}
                   onChange={this.handleChange.bind(this,'advisor')}
                   placeholder="Doradca"
                   required={true} /><br />
            <select id="status"
                    value={this.props.draftCard.status}
                    onChange={this.handleChange.bind(this,'status')}>
              <option value="registration">Rejestracja</option>
              <option value="offering">Oferta</option>
              <option value="decision">Decyzja</option>
              <option value="settlement">Umowa</option>
              <option value="payment">Wypłata</option>
            </select>

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
    company: PropTypes.string,
    telephone: PropTypes.string,
    email: PropTypes.email,
    nip: PropTypes.string,
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
