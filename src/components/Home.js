import React, { useEffect } from 'react';

import { auth, database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Link } from 'react-router-dom';

function Home(props) {
  const {
    user,
    setUser,
    username,
    isLogged,
    handleSubmitBlog,
    handleChangeBlog,
    blogCollection,
    setUpdateBlog,
  } = React.useContext(DevilContext);

  let { history } = props;

  return (
    <div>
      {blogCollection &&
        blogCollection.map((item) => {
          const { naslov, sadrzaj, imgURL, autor, id } = item;

        

          return (
            <div key={id} className="blogPost__content">
              <div>
                <h2>{naslov}</h2>

                <h4>{sadrzaj}</h4>
                <Link to={`/singleBlogPage/${id}`}>
                  <img src={imgURL} alt="" />
                </Link>

                <p>{autor}</p>
              </div>

              <button
                onClick={() => database.collection('blogPost').doc(id).delete()}
                className="btn btn-delete"
              >
                Delete
              </button>
              <Link to={`/updateBlog/${id}`} className="btn btn-delete">
                Update
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default withRouter(Home);
