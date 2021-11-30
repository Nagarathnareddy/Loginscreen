import Login from './Login';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import forgot from './forgot';
import register from './register';


function App() {
  return (
    <Router>
    <div className="App">
      
     <Switch>
    <Route exact path="/login" component={Login}/>
     <Route exact path="/forgot" component={forgot}/>
     <Route exact path="/join" component={register}/>
     </Switch>
     
     
    </div>
    </Router>
  );
}

export default App;
