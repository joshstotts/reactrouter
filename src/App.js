import './App.css';
import { Route, Switch } from 'react-router-dom';
import Stocks from './pages/Stocks';
import Main from './pages/Main';
import Price from './pages/Price';
import About from './pages/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/price/:symbol' render={(routerProps) => <Price {...routerProps} />} />
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
