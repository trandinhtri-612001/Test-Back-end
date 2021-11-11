
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Layout/Login'
import Register from './Components/Layout/Register'
import AuthContextProvider from './context/authContext';
import ProtectedRoute from './Components/Routing/Protectedrouter';
function App() {
  return (
  
    <AuthContextProvider>
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Register}/>
          <ProtectedRoute exact path='/home' component={Home}/>
      </Switch>
    </Router>
   </AuthContextProvider>
         
     
  );
}

export default App;
