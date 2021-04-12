import React from 'react';
import './App.css';

import { DevilContext } from './context';
import './authentication/auth.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';


import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import {
  Home,
  RedirectPage,
  CreateBlog,
  UpdateBlog,
  SingleBlogPage,
} from './pages';

import {Header} from './components'

function App() {
  const { redirectPage } = React.useContext(DevilContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/createBlog">
            {redirectPage ? <CreateBlog /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/updateBlog/:id">
            <UpdateBlog />
          </Route>
          <Route exact path="/singleBlogPage/:id">
            <SingleBlogPage />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route path="*" component={RedirectPage} />
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
