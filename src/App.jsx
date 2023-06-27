import './App.css';
import { Navbar } from './components/navbar';
import { Router, Route, Switch } from "react-router-dom";

import { Footer } from './components/footer';
import Dashboard  from './components/dashboard';
import { useAuth0 } from "@auth0/auth0-react";
import {createBrowserHistory} from "history";
import { HeroText } from './components/hero';
import Loading from './components/Loading';
import { Profile } from './components/profile';
const history = createBrowserHistory();

function App() {

  const { isLoading, error , isAuthenticated } = useAuth0();

    if (error) {
      return <div>Oops... {error.message}</div>;
    }

    
  if (isLoading) {
    return <Loading />;
  }
  return (

    <Router history={history}>
 
    <Navbar/>
        <Switch>
          <Route path="/" exact component={ isAuthenticated ? Dashboard : HeroText} />
          <Route path="/profile" component={Profile}/>
          <Route path='*' component={() => { return (<div>404 , PAGE NOT FOUND</div>) }}/>
        </Switch>
        <Footer/>
    
    </Router>
  );
}

export default App;
