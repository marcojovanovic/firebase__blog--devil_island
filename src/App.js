import React from 'react';
import './authentication/auth.css';
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
  Home,
  RedirectPage,
  CreateBlog,
  UpdateBlog,
  SingleBlogPage,
} from './pages';

import { Header, ScrollToTop } from './components';
import Footer from './components/Footer';
import BlogTitle from './components/BlogTitle';

function App() {
  const { redirectPage } = React.useContext(DevilContext);

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Header />
            <BlogTitle />
            <div className="blogPost__container">
              <Home />
            </div>
            <Footer />
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
