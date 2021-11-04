import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

//1-Acessar os elementos da tela
//2-Interagir com os elementos, se for necessário
//3-Fazer os testes

describe("Tela de inserção de email", () => {

  it('Verifica se existe um input de email na tela', () => {
    render(<App />); //1-acessar os elementos
    const inputEmail = screen.getByLabelText(/Email/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });
  
  it('Verifica se existe dois botões na tela', () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  })
  
  it('Verifica se existe o botão de Enviar na tela', () => {
    render(<App />);
    const button = screen.getByTestId('id-send')
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  })
  
  // test('Verifica se existe um input do tipo Text', () => {
  //   render(<App />);
  //   const inputText = screen.getByTestId('btn-text');
  //   expect(inputText).toBeInTheDocument();
  //   expect(inputText).toHaveProperty('type', 'text');
  // })
  
  it('Verifica que, ao digitar o email e clicar em Enviar, o email é renderizado', () => {
    render(<App />);
    //1-Acessar os elementos da tela
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");
  
    //2-Interagir com os elementos (se for necessário)
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(button)
  
    //3-Fazer os testes
    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com");
  })


})


