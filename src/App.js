import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/services">
          <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
