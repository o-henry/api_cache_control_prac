import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, PhotoList } from 'pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/list">
          <PhotoList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
