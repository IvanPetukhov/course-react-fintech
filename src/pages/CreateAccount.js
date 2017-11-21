import React from 'react';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';
import FormField from '../components/FormField/FormField';
import FormText from '../components/FormText/FormText';

/* export default () => (
  <div>
    <h2>Создание аккаунта</h2>
    <p>Здесь мы будем создавать новые счета</p>
  </div>
); */

const validateRequire = value => !value;

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      currency: '',
      description: ''
    };
  }

  validationsForm() {
    let status = true;

    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return false;
      }
    });

    return status;
  }

  formClear() {
    this.setState({
      name: '',
      currency: '',
      description: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

    this.props.createAccount(this.state);

    this.formClear();
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (<div>
      <h2>Создать аккаунт</h2>
      <Form onSubmit={this.handleSubmit}>
        <FormField label="Название" name="name">
          <FormText value={this.state.name} name="name" onChange={this.handleInputChange} />
        </FormField>

        <FormField label="Валюта" name="currency">
          <FormText value={this.state.currency} name="currency" onChange={this.handleInputChange} />
        </FormField>

        <FormField label="Описание" name="descriprion">
          <FormText value={this.state.description} name="description" onChange={this.handleInputChange} />
        </FormField>
        <br />
        <Button type="submit">Отправить</Button>
      </Form>
    </div>);
  };
}