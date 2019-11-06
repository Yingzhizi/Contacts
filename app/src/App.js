import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Contacts from './pages/Contact';
import Dashboard from './pages/Dashboard';
import { theme } from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
              <Route path="/contact">
                <Contacts />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
          </Switch>
          </ThemeProvider >
        </div>
      </Router>
  );
}

export default App;
