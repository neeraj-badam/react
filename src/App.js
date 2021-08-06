import logo from './logo.svg';
import NavBar from './components/NavBar';
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import DisplayUsers from './components/DisplayUsers'
import {Link,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={CreateUser}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/edit/:id" component={EditUser}/>
        <Route path="/display" component={DisplayUsers}/>
      </Switch>
    </div>
  );
}

export default App;