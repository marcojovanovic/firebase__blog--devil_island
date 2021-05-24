import React from 'react';
import GlobalStyle from './theme/globalStyle';

import { DevilContext } from './context';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SignUp from './authentication/SignUp';
import SignIn from './authentication/SignIn';
import {
  LandingPage,
  RedirectPage,
  CreateBlog,
  UpdateBlog,
  SingleBlogPage,
} from './pages';

import {  ScrollToTop } from './components';

function App() {
  const { redirectPage } = React.useContext(DevilContext);

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
           <LandingPage />
          </Route>
          <Route exact path="/createBlog">
            {redirectPage ? <CreateBlog /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/updateBlog/:id">
            <UpdateBlog />
          </Route>
          <Route exact path="/singleBlogPage/:id" component={SingleBlogPage} />
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
