import React, { useEffect } from 'react';
import './App.css';
import { auth } from './firebase/config';

import { DevilContext } from './context';
import './authentication/auth.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './header.css';

import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import Header from './components/Header';
import Home from './components/Home';

import RedirectPage from './components/RedirectPage'
import CreateBlog from './components/CreateBlog';
import UpdateBlog from './components/UpdateBlog';
import SingleBlogPage from './components/SingleBlogPage';


function App() {
  const { user, username } = React.useContext(DevilContext);

  //let history = useHistory()

 
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
         <Route exact path="/">
            <Home /> 
          </Route>
         <Route exact path="/createBlog">
            <CreateBlog /> 
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
