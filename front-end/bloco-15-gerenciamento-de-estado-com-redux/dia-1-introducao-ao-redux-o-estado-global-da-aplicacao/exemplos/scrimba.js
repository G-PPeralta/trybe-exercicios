const redux = require("redux");

// CRIANDO UMA ACTION
// const action = {
//   type: "INCREMENT"
// }

// ACTION CREATER:

function increment() {
  return {
    type: "INCREMENT",
  };
}

function decrement() {
  return {
    type: "DECREMENT",
  };
}

function double() {
  return {
    type: "DOUBLE",
  };
}

function halve() {
  return {
    type: "halve",
  };
}

// REDUCER É UMA FUNÇÃO QUE SERVE PARA RETORNAR UM NOVO STATE BASEADO NA ACTION RECEBIDA

// 2 parâmetros: 1) State antigo; 2) action que indica ao reducer como pegar a versão anterior do state e criar uma nova

/*
function reducer(state = { count: 0 }, action) {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
}
*/

// TROCANDO PARA SWITCH:

function reducer(state = { count: 0 }, action) {
  // return new state based on the incoming action.type
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "DOUBLE":
      return {
        count: state.count * 2,
      };
    case "HALVE":
      return {
        count: Math.round(state.count / 2),
      };
    default:
      return state;
  }
}

//SE O STATE NÃO FOSSE UM OBJETO MAS TÃO SOMENTE UM NÚMERO

/*
function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "DOUBLE":
      return state * 2;
    case "HALVE":
      return Math.round(state / 2);
    default:
      return state;
  }
}
*/

// CRIANDO STORE

const store = redux.createStore(reducer)

// USANDO O SUBSCRIBE

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "DOUBLE"})