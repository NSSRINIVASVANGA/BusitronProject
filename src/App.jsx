import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Dashbord from './components/Dashbord'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/dashbord" component={Dashbord} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
