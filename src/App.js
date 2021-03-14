import './App.css';
import app from './base';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
