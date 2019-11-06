import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Contacts from './pages/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
        <ThemeProvider>
          <CssBaseline />
          <Switch>
              <Route path="/">
                <Contacts />
              </Route>
          </Switch>
          </ThemeProvider >
        </div>
      </Router>
  );
}

export default App;
