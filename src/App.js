import './App.css';
import {Route, Switch} from 'react-router';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Timetable from './components/Timetable';
import Contact from './components/Contact';
import Events from './components/Events';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';




function App() {
return (
  <>
< Navbar></Navbar>
    <Switch>
      <Route exact path ="/" component={Welcome}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/timetable" component={Timetable}/>
      <Route exact path ="/contact" component={Contact}/>
      <Route exact path ="/events" component={Events}/> 
    
      <Route exact path ="/signup" component={Signup}/>
      
      <Route exact path ="/login" component={Login}/>     
      </Switch>
    <Footer></Footer>
    </>
      
    
  );

  }
export default App;
