import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import stateReducer from './store/reducer/stateReducer';
import cityReducer from './store/reducer/cityReducer';
import userReducer from './store/reducer/userReducer';
import movieReducer from './store/reducer/movieReducer';
import screenReducer from './store/reducer/screenReducer';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  stateReducer:stateReducer,
  cityReducer:cityReducer,
  movieReducer:movieReducer,
  userReducer:userReducer,
  screenReducer:screenReducer
})

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,componseEnhancers(applyMiddleware(thunk)));

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
