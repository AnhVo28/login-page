import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import LoginOption from './components/LoginOption'
import LoginEmail from './components/LoginEmail'
import ErrPage from './components/ErrPage'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>


              <Route exact path="/" render={()=>(
                  <div>

                    <Header />
                    <LoginOption />
                  </div>
                )} />

                <Route path="/loginEmail" render={()=>(
                    <div>
                      <Header />
                      <LoginEmail />
                    </div>
                  )} />

                <Route path='/404' render={()=> <ErrPage />} />
                <Redirect to='/404' />
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
