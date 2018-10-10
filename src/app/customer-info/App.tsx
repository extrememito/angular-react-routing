import * as React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';

export interface IAppProps {
  language: string;
}

export class App extends React.Component<IAppProps, any> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Hello from React</h1>
          {this.props.language}
          <h2>
            React internal routing:
          </h2>
          <Switch>
            <Route exact path="/react" component={Home} />
            <Route path="/react/about" component={About} />
            <Redirect to="/react" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
