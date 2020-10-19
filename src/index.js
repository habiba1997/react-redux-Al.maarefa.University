import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';
import {Provider } from 'react-redux';
import store from './redux/store';

store.subscribe(() => {
    console.log("Store changed!", store.getState());
    
}); 

ReactDOM.render(
  <Suspense fallback={<div>Loading ........</div>}>
    <Provider store={store}>
        <App />
    </Provider>
  </Suspense>
, document.getElementById('root')
);

serviceWorker.unregister();
