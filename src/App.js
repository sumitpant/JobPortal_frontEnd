import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Recruiter from "./components/Recruiter";
import Protect from './ProtectedRoute/protect'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Protect path="/main">
            <Navbar />
            <Dashboard />
          </Protect>
          <Protect path="/recruit" component={Recruiter}>
            <Navbar/>
            <Recruiter/>
          </Protect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
