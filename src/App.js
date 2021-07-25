
import './App.css';
import './w3.css';
import './style.css';
import Navbar  from './Navbar';
import Home  from './Home';
import About  from './About';
import Contact  from './Contact';
import Todo  from './Todo';
import Product  from './Product';
import {BrowserRouter, Switch ,Route,Redirect} from 'react-router-dom';






function App() {
  return (
    <>
   
   <BrowserRouter>
   <Navbar></Navbar>
  <Switch>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/about" component={About}></Route>
   <Route exact path="/todo" component={Todo}></Route>
   <Route exact path="/product" component={Product}></Route>
   <Route exact path="/contact" component={Contact}></Route>  
   <Redirect to="/" ></Redirect>

  </Switch>
  </BrowserRouter>
  
  
    </>
  );
}

export default App;
