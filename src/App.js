import React, { useEffect } from 'react';
import './App.css';

import { DevilContext } from './context';
import './authentication/auth.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './header.css';

import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import {
  Header,
  Home,
  RedirectPage,
  CreateBlog,
  UpdateBlog,
  SingleBlogPage,
} from './components';

function App() {
  const { user, username, redirectPage } = React.useContext(DevilContext);

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
          <Route path="*">
            <RedirectPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
