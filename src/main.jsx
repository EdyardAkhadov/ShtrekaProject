import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/MainStyles.css'
import Router from './components/router/Router';
import {Provider} from 'react-redux' 
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
       <Router/>
      </Provider>
    </BrowserRouter>
  </>
)
 