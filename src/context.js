import React, { createContext, useState, useEffect } from 'react';
import { auth, database, timestamp } from './firebase/config';

export const DevilContext = createContext(); // izvoz za komponente

const DevilProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);


  // protected routes
  const [isLogged, setisLogged] = useState(false);

  const [username, setUsername] = useState('');

  const [updateBlog, setUpdateBlog] = useState(false);

  const [singleBlog, setSingleBlog] = useState('');

  const [updateSingleBlog, setUpdateSingleBlog] = useState('');

  const [redirectPage, setRedirectPage] = useState(true);

  const [error, setError] = useState(null);

  const [blog, setBlog] = useState({
    naslov: '',
    sadrzaj: '',
    imgURL: '',
    autor: '',
  });

  const [blogCollection, setBlogCollection] = useState('');


  // pratimo da li je user ulogovan ili ne

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let currentUser = auth.currentUser;

        setisLogged(true);

        currentUser.updateProfile({
          displayName: username,
        });
      } else {
        console.log('no user');
        setisLogged(false);


        
      }
    });
  }, [user]);

  useEffect(() => {
    setRedirectPage(true);
  }, [redirectPage]);


  // izlistavanje iz firebase, home page display blogs

  useEffect(() => {
   const unsub= database
      .collection('blogPost')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        let documents = [];

        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setBlogCollection(documents);
      });


      return ()=>unsub()
  }, [blog]);

  

  const handleChangeBlog = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmitBlog = async(e) => {
    e.preventDefault();

   await database
      .collection('blogPost')
      .add({
        timestamp,
        ...blog,
      })

      .then((data) => {
        console.log(data);
        setRedirectPage(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 7000);
  }, [error]);

  return (
    <DevilContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        username,
        setUsername,
        isLogged,
        blogCollection,
        setBlogCollection,
        setUpdateBlog,
        updateBlog,
        singleBlog,
        setSingleBlog,
        updateSingleBlog,
        setUpdateSingleBlog,
        handleChangeBlog,
        redirectPage,
        handleSubmitBlog,
        error,
        setError,
       
      }}
    >
      {children}
    </DevilContext.Provider>
  );
};

export { DevilProvider }; // izvoz za index.js
