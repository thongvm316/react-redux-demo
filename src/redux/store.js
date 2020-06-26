import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import rootReducer from './rootReducer'

// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export default store;


/*----------------- Withdow RootReducer--------------------------- */
// import { createStore } from 'redux'
// import cakeReducer from './cake/cakeReducer' 

// const store = createStore(cakeReducer);
// export default store;