import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

const allSubjects = conteudos.map((item) => {
  return (
    <div key={item.conteudo} className='content'>
      <h3>{`O conteudo é: ${item.conteudo}`}</h3>
      <p>{`status: ${item.status}`}</p>
      <p>{`bloco: ${item.bloco}`}</p>
    </div>
  );
});

class Content extends React.Component {
  render() {
    return (
      allSubjects
    );
  }
}

export default Content;