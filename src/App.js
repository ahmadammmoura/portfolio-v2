import About from "./components/about";
import Contact from "./components/contact";
import Landding from "./components/landding";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import './app.css'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='appContainer'>
    <NavBar/>
        <Switch>
          <Route exact path="/" component={Landding} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      
    </div>
  );
}

export default App;
