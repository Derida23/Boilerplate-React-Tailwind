import "./App.scss";
import Nav from "../../components/Nav";
import Home from "../Home";
import Shop from "../Shop";
import About from "../About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
