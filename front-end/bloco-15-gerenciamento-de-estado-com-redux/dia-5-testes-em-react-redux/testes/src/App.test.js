import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (component,{ initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {

  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    const counter = queryByText('0');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(counter).toBeInTheDocument();
  });

  test('Crie um teste com o valor padrão do reducer e teste se um clique funciona.', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

    userEvent.click(buttonAdicionar)

    expect(queryByText('1')).toBeInTheDocument();
  })

  test('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos', () => {
      const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

      const buttonAdicionar = queryByText('Clique aqui');
      expect(queryByText('10')).toBeInTheDocument();

      
      expect(buttonAdicionar).toBeInTheDocument();
      userEvent.click(buttonAdicionar)

      expect(queryByText('11')).toBeInTheDocument();

    });
});