import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "../components/Signup";

class App extends Component{
  render(){
    return(
      <div className="site">
        <nav>
            <Link className={"nav-link"} to={"/"}>Home</Link>
            <Link className={"nav-link"} to={"/login/"}>Login</Link>
            <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
        </nav>  
        <main>
            <h1>Welcome to Jokebot!</h1>
              <Switch>
                  <Route path={"/login/"} component={Login}/>
                  <Route path={"/signup/"} component={Signup}/>
                  <Route path={"/"} render={() => <div>Home again</div>}/>
              </Switch>
        </main>
      </div>
    );
  }
}

export default App;