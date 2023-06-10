import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import routes from "./routes";


function App() {
  return (
    <>
    <Router>
      { routes }
    </Router>
    </>
  );
}

export default App;
