import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';
import {Provider } from 'react-redux';
import store from './fakeStudentsService/store';
import {createBrowserHistory} from 'history';
import { Route, BrowserRouter } from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Applications from './components/applications';

const browserHistory = createBrowserHistory();

store.subscribe(() => {
    console.log("Store changed!", store.getState());
    
}); 

ReactDOM.render(
  <Suspense fallback={<div>Loading ........</div>}>
    <Provider store={store}>
      <BrowserRouter>
        <div>
            <Route exact path="/" component = {App}/>
            <Route path = "/applications" component = {Applications} />
        </div>
      </BrowserRouter>
    </Provider>
   </Suspense>
, document.getElementById('root')
);

serviceWorker.unregister();
  //     {/* <BrowserRouter> */}
  //     <Router history = {hashHistory}>
  //     {/* <div></div> */}
  //   <Route path = "/" component = {App}>
  //     <Route path = "applications" component = {Applications} />
  //  </Route>
  //  </Router>      
  //   {/* </BrowserRouter> */}
