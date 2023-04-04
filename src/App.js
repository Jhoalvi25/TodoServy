import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Options/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path={["/", "/:options"]} component={Home} />

      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
