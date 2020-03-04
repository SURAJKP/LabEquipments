import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// Import root app
import App from './Components/App';
import './css/site.css';

// Import Redux configureStore
import configureStore from './Redux/configureStore';


// create redux store with history
const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>,
 document.getElementById('root'));

serviceWorker.unregister();
