import * as React from 'react'
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'

export interface IAppProps {
  language: string
}

export class App extends React.Component<IAppProps, any> {
  render() {
    return (
      <BrowserRouter basename='/customerInfo'>
        <div>
          <h1>Hello from React</h1>
          <h2>Active Language: {this.props.language}</h2>
          <h2>React internal routing links:</h2>
          <div><Link to='/'>React home</Link></div>
          <div><Link to='/about'>React about</Link></div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Redirect to='/' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
