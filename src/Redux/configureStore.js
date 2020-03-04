import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers'

const configureStore = () => {
  const store = createStore(
    rootReducer, // Initializing root reducer
    composeWithDevTools(applyMiddleware(thunk)) //Redux DevTools for debugging application's state changes.
  );

  return store;
};

export default configureStore;