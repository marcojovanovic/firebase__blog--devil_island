import React, { useEffect } from 'react';

import { DevilContext } from '../context';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { auth, database, timestamp } from '../firebase/config';
import ReactMarkdown from 'react-markdown';

function CreateBlog(props) {
  let { history } = props;

  const input = `#viki`;

  const {
    user,
    setUser,
    username,
    isLogged,
    setBlogCollection,
    handleChangeBlog,
    setBlog,
    blog,
    redirectPage,
    handleSubmitBlog
  } = React.useContext(DevilContext);

  

  

  if (isLogged === false) {
    return <Redirect to="/" />;
  }
  

 

  



  return (
    <div>
      {user && username}

      <h1 className="text-center">Napravi Blog</h1>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmitBlog}>
          <div className="form-group">
            <label htmlFor="brand">Naslov</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChangeBlog}
              name="naslov"
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Sadržaj</label>

            <textarea
              type="text"
              className="form-control"
              onChange={handleChangeBlog}
              name="sadrzaj"
            ></textarea>
            <ReactMarkdown source={input} />
          </div>

          <div className="form-group">
            <label htmlFor="price">ImgURL</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChangeBlog}
              name="imgURL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Autor</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChangeBlog}
              name="autor"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CreateBlog);
