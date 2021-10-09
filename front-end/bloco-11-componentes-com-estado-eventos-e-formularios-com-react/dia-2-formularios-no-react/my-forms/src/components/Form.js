import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      countryState: '',
      houseType: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const {name, type, value, checked} = event.target
    type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
  };

  render() {
    const states = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espirito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso do Sul',
      'Mato Grosso',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];

    const allStates = states.map((state, index) => (
      <option key={index}>{state}</option>
    ));

    return (
      <form>
        <fieldset>
          <div>
            <label>Full Name: </label>
            <input
              name='fullName'
              type='text'
              value={this.state.fullName}
              onChange={this.handleChange}
              required
              maxLength='40'
            />
          </div>
          <div>
            <label>E-mail: </label>
            <input
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>CPF: </label>
            <input
              name='cpf'
              type='text'
              value={this.state.cpf}
              onChange={this.handleChange}
              required
              maxLength='11'
            />
          </div>
          <div>
            <label>Adress: </label>
            <input
              name='cpf'
              type='text'
              value={this.state.adress}
              onChange={this.handleChange}
              required
              maxLength='200'
            />
          </div>
          <div>
            <label>City: </label>
            <input
              name='city'
              type='text'
              value={this.state.city}
              onChange={this.handleChange}
              required
              maxLength='28'
            />
          </div>
          <div>
            <label>State: </label>
            <select
              name='countryState'
              type='text'
              value={this.state.countryState}
              onChange={this.handleChange}
              required
            >
              <option>Select</option>
              {allStates}
            </select>
            <div>
              <label>Type: </label>
              <input
                type='radio'
                name='houseType'
                value='house'
                checked={this.state.houseType === 'house'}
                onChange={this.handleChange}
              /> House
              <input
                type='radio'
                name='houseType'
                value='apartment'
                checked={this.state.houseType === 'apartment'}
                onChange={this.handleChange}
              /> Apartment
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
