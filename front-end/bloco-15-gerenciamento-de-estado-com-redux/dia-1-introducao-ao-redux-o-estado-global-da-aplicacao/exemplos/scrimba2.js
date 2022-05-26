const redux = require("redux");

const INITIAL_STATE = {
  // ESTADO QUE SERÁ PASSADO AO REDUCER
  count: 0,
  favoriteThings: [],
};

const changeCount = (amount) => {
  // FUNÇÃO QUE DEFINE A ACTION QUE SERÁ PASSADA AO REDUCER
  return {
    type: "CHANGE_COUNT",
    payload: amount,
  };
};

const addFavoriteThings = (thing) => {
  // FUNÇÃO QUE DEFINE A ACTION QUE SERÁ PASSADA AO REDUCER
  return {
    type: "ADD_FAVORITE_THING",
    payload: thing,
  };
};

const removeFavoriteThing = (thing) => {
  return {
    type: "REMOVE_FAVORITE_THING",
    payload: thing,
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_COUNT":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "ADD_FAVORITE_THING":
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payload],
      };
    case "REMOVE_FAVORITE_THING":
      return {
        ...state,
        favoriteThings: [...state.favoriteThings].filter(
          (thing) => thing !== action.payload
        ),
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer); // CRIA A STORE

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(changeCount(1)); // ENVIA A ACTION AO REDUCER
store.dispatch(addFavoriteThings("React")); // ENVIA A ACTION AO REDUCER
store.dispatch(addFavoriteThings("Jungle")); // ENVIA A ACTION AO REDUCER
store.dispatch(removeFavoriteThing("Jungle"));
