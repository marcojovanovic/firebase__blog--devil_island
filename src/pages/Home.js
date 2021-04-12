import React, { useEffect } from 'react';

import { database } from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Link } from 'react-router-dom';
import { DisplaySuccesLogin } from '../components';
import styled from 'styled-components'



function Home(props) {
  const {
    user,
    isLogged,
    blogCollection,
    successMessage,
    setSuccessMessage,
  } = React.useContext(DevilContext);

  useEffect(() => {


    if (user) {

        setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    } 
  }, []);

  return (
    <>
      {successMessage && <DisplaySuccesLogin />}

      {blogCollection &&
        blogCollection.map((item) => {
          const { naslov, sadrzaj, imgURL, autor, id, timestamp } = item;

          return (
            <div key={id} className="blogPost__content">
              <div>
                <h2>{naslov}</h2>
                <h4>{`${sadrzaj.slice(0,85)} ...`} </h4>

                <Link to={`/singleBlogPage/${id}`}>
                  <Image src={imgURL} alt="" />
                </Link>

                <p>{autor}</p>
                <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
              </div>

              {isLogged && (
                <div className="flex-btn">
                  <button
                    onClick={() =>
                      alert(
                        'Sigurno želiš da obrišeš post ?',
                        database.collection('blogPost').doc(id).delete()
                      )
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
    </>
  );
}

const Image = styled.img`

  width:30rem;

`

export default withRouter(Home);
