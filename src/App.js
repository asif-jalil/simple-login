import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Landing from "./component/Landing";
import PrivateRoute from "./component/PrivateRoute";
import Profile from "./component/Profile";

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/signup">
               <Landing></Landing>
            </Route>
            <PrivateRoute exact path="/">
               <Home></Home>
            </PrivateRoute>
            <PrivateRoute path="/profile">
               <Profile></Profile>
            </PrivateRoute>
         </Switch>
      </Router>
   );
}

export default App;
