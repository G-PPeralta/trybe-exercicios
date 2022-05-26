// PASSO 1: IMPORTAR O REDUX
const redux = require('redux');

//PASSO 2: CRIAR A STORE QUE ARMAZENA OS ESTADOS
const store = redux.createStore();

//PASSO 3: PASSAR O REDUCER, QUE É UMA FUNÇÃO RESPONSÁVEL POR ALTERAR OS DADOS DA STORE. O PRIMEIRO PARÂMETRO DO REDUCER É UM STATE, SENDO QUE O SEU RETORNO SUBSTITUI O STATE DA STORE

const reducer = (state) => {
  return state; //ESSE STATE VEM INICIALMENTE COMO UNDEFINED
  };

// PASSO 4: ATRIBUIR UM VALOR PARA O STATE:

const reducer = (state = { login: false, email: "" }) => {
  return state;
  };


// AJEITANDO O CÓDIGO PARA COLOCAR O STATE PASSADO COMO PARÂMETRO EM UMA CONSTANTE:

const ESTADO_INICIAL = {
  login: false,
  email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL) => {
  return state;
  };
  
const store = redux.createStore(reducer); // PASSANDO ESSE ESTADO CRIADO PARA ALTERAR O DA STORE

console.log(store.getState()); // VERIFICANDO O OUTPUT ACESSANDO A STORE USANDO O getState()

// ALTERANDO O DADO QUE ESTÁ NO ESTADO_INICIAL: QUEM FAZ ISSO É A ACTION, QUE NADA MAIS É QUE UM OBJETO JAVASCRIPT, QUEM TEM UMA PROPRIEDADE TYPE, E É RESPONSÁVEL POR COMUNICAR AO REDUCER UMA MUDANÇA A SER FEITA NA STORE.

//PARA FAZER ISSO NA PRÁTICA, UTILIZA-SE UMA FUNÇÃO CHAMADA actionCreator:

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }


  


