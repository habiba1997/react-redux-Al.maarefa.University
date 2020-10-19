// import { createStore } from 'redux';
import combineReducers from './reducers/reducer_index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
  

// const store = createStore(combineReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;


const initialState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
