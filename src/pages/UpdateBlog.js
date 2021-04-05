import React, { useEffect } from 'react';
import { auth, database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Redirect, useParams } from 'react-router-dom';

function UpdateBlog(props) {
  let { history } = props;
  let { id } = useParams();

  const {
    user,
    setUser,
    username,
    isLogged,
    handleSubmitBlog,
    handleChangeBlog,
    updateBlog,
    blog,
    setBlog,
    setSingleBlog,
    singleBlog,
    updateSingleBlog,
    setUpdateSingleBlog,
  } = React.useContext(DevilContext);

  const handleLogOut = () => {
    if (user) {
      setUser(null);
      auth.signOut().then(console.log('sign out'));
      history.push('/login');
    }
  };

  function gettingBlogPost() {
    database
      .collection('blogPost')
      .doc(id)
      .get()
      .then((snap) => {
        setUpdateSingleBlog(snap.data());
      });
  }

  useEffect(() => {
    gettingBlogPost();
  }, [id]);

  const handleUpdateChangeBlog = (e) => {
    setUpdateSingleBlog({
      ...updateSingleBlog,
      [e.target.name]: e.target.value,
    });
  };

  const { naslov, autor, imgURL, sadrzaj } = updateSingleBlog;

  const handleUpdateBlog = (e) => {
    e.preventDefault();

    database
      .collection('blogPost')
      .doc(`${id}`)
      .update({
        naslov: naslov,
        sadrzaj: sadrzaj,
        autor: autor,
        imgURL: imgURL,
      })
      .then((data) => {
        
        console.log(data);
        history.push('/')
      })
      .catch((e) => {
        console.log(e);
      });
  };


  return (
    <div>
      {user && username}
      <button onClick={handleLogOut} type="submit" className="signupbtn">
        Sign Out
      </button>

      <h1 className="text-center">Izmeni Blog</h1>

      <div className="form-container">
        <form className="form" onSubmit={handleUpdateBlog}>
          <div className="form-group">
            <label htmlFor="brand">Naslov</label>
            <input
              type="text"
              className="form-control"
              value={naslov}
              onChange={handleUpdateChangeBlog}
              name="naslov"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Sadržaj</label>
            <input
              type="text"
              className="form-control"
              value={sadrzaj}
              onChange={handleUpdateChangeBlog}
              name="sadrzaj"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">ImgURL</label>
            <input
              type="text"
              className="form-control"
              value={imgURL}
              onChange={handleUpdateChangeBlog}
              name="imgURL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Autor</label>
            <input
              type="text"
              className="form-control"
              value={autor}
              onChange={handleUpdateChangeBlog}
              name="autor"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(UpdateBlog);
