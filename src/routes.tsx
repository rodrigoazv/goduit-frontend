import React from "react";

import { createGlobalStyle } from 'styled-components';

import { Route, BrowserRouter , Switch} from "react-router-dom";

//imports
import Login from './pages/Login';
import Register from './pages/Register';

const GlobalStyle = createGlobalStyle`
  * {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
        outline: 0;
        background-color: #fffafa;
        font-family: 'Roboto', sans-serif;
    }
    button{
        cursor:pointer;
    }

    form input{
      width: 100%;
      height: 60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0 24px;
    }

`;

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    <GlobalStyle/>
    </BrowserRouter>
);

export default Routes;