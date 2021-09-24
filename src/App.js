
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import ProtectedRoute from './components/ProtectedRoute';
import Settings from './pages/Settings';

      function App(){
      return (
        <div style={{                 
          backgroundImage: `url("mitchell.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"     
        }}>
        <div className="container">
          <BrowserRouter>
          <ProtectedRoute path="/" exact component={Dashboard} /> 
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/settings" component={Settings}/>
          </BrowserRouter>          
        </div>
        </div>
      );
    }  


// create map state to props function
// 
export default App;