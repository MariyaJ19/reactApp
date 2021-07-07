
import Homes from './Homes'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Cart from './components2/Cart'
import Login from './components/Login'
import Register from './components/Register'




function App() {

  return (
    <div className ="container">
    <Router>
      <AuthProvider>
        <Switch>
        <Route exact path="/Homes" component={Homes} />
        
          <Route exact path='/' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
