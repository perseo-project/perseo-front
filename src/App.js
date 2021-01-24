// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useRoutes, A } from 'hookrouter'

import Link from '@material-ui/core/Link'

import Routes from './Routes/Routes'
import routes from './Routes/Routes'

import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Footer from './components/footer/Footer'
import { Profile } from './components/Profile';
import {Header} from "./components/navbar"
import {CenteredGrid as Home} from "./components/weOffer/weOffer"

function App() {
  const routeResult = useRoutes(Routes)
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;