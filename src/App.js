import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import FoodSent from "./pages/FoodSent";
import LandingPage from "./pages/Landing";
import SignUp from './pages/SignUp';
import SignUpOrg from './pages/SignUpOrg';
import SignUpInd from './pages/SignUpInd';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route exact path="/home" component={LandingPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signUp/nonprofit" component={SignUpOrg} />
          <Route exact path="/signUp/individual" component={SignUpInd} />
          {/* <Route path="/signIn/nonprofit" component={LandingPage} />
          <Route path="/signIn/individual" component={LandingPage} /> */}
          <Route exact path="/dashboard/individual" component={Dashboard} />
          <Route exact path="/foodSent" component={FoodSent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
