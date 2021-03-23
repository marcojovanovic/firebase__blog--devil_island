import React, { createContext, useState, useEffect } from 'react';
import { auth, database } from './firebase/config';
import { withRouter, useHistory } from 'react-router-dom';

export const DevilContext = createContext(); // izvoz za komponente

const DevilProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  // protected routes
  const [isLogged, setisLogged] = useState(false);

  const [username, setUsername] = useState('');
 
  const [updateBlog, setUpdateBlog]=useState(false) 

  const history = useHistory()


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

        console.log(currentUser);
        setisLogged(true);

        user.updateProfile({
          displayName: username,
        });
      } else {
        console.log('no user');
        setisLogged(false);
      }
    });
  }, [user]);

  const handleSubmitBlog = (e) => {
    e.preventDefault();

    database
      .collection('blogPost')
      .add({
        ...blog,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


const handleUpdateBlog = () =>{





}


  const handleChangeBlog = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // izlistavanje iz firebase

  useEffect(() => {
    database.collection('blogPost').onSnapshot((snapshot) => {
      let documents = [];

      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setBlogCollection(documents);
    });
  }, []);


  


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
        handleSubmitBlog,
        handleChangeBlog,
        blogCollection,
        setUpdateBlog,
        updateBlog
      }}
    >
      {children}
    </DevilContext.Provider>
  );
};

export { DevilProvider }; // izvoz za index.js
