import React from 'react';
import FormField from '../../src/components/FormField/FormField';
import FormText from '../../src/components/FormText/FormText';

export default class CreateAccount extends React.Component {
  state = {
    name: ''
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormField label="Имя" name="name">
        <FormText name="name">Имя</FormText>
      </FormField>
    );
  }
}

/*
export default () => (
  <div>
    <h2>Создание аккаунта</h2>
    <p>Здесь мы будем создавать новые счета</p>
  </div>
);
*/