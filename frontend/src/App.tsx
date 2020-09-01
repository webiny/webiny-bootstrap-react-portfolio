import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Nav
import Navbar from './components/navbar';

// Pages
import MyPages from './pages';

function App() {

  return (
    <div style={{ display: 'flex' }}>
        <Router>
          <Navbar />
          <Switch>
            {['', 'About', 'Blogs', 'Projects'].map((text, index) => {
              return (
                <Route exact path={ '/'+ text} key={index}>
                  <MyPages page={text} />
                </Route>
              )
            })}
          </Switch>
        </Router>
      </div>
    ) 
  }

export default App;