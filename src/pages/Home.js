import React, { useEffect } from 'react';

import { database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function Home(props) {
  const {
    user,
    setUser,
    username,
    isLogged,
    blogCollection,
    setUpdateBlog,
  } = React.useContext(DevilContext);

  let { history } = props;

  return (
    <div>
      {blogCollection &&
        blogCollection.map((item) => {
          const { naslov, sadrzaj, imgURL, autor, id, timestamp } = item;

          return (
            <div key={id} className="blogPost__content">
              <div>
                <h2>{naslov}</h2>
                <ReactMarkdown source={sadrzaj} />

                <Link to={`/singleBlogPage/${id}`}>
                  <img src={imgURL} alt="" />
                </Link>

                <p>{autor}</p>
                <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
              </div>

              {isLogged && (
                <div className="flex-btn">
                  <button
                    onClick={() =>
                      alert('Sigurno želiš da obrišeš post ?', database.collection('blogPost').doc(id).delete())
                    }
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                  <Link to={`/updateBlog/${id}`} className="btn btn-update">
                    Update
                  </Link>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default withRouter(Home);
