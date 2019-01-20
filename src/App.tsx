import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from './component';
import { links, routes } from './router';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="main">
          <Link list={links}/>
          <Route list={routes} />
        </div>
      </Router>
    );
  }
}

export default App;
