import React, { useEffect } from 'react';
import { DevilContext } from '../context';
import {  useParams } from 'react-router-dom';
import { database } from '../firebase/config';
import styled from 'styled-components'

function SingleBlogPage() {
  let { id } = useParams();
  const {

    singleBlog,
    setSingleBlog,
  } = React.useContext(DevilContext);

  useEffect(() => {
    database
      .collection('blogPost')
      .doc(id)
      .get()
      .then((snap) => {
        setSingleBlog(snap.data());
      });

      

  }, [id]);

  const { autor, sadrzaj, naslov, imgURL} = singleBlog;



  return (
    <div>
      <h2>{naslov && naslov}</h2>
      <h4>{sadrzaj && sadrzaj}</h4>
      <img src={imgURL} alt="" />
      <p>{autor && autor}</p>
     
    </div>
  );
}


const IMG = styled.img`

  width:20%;



`


export default SingleBlogPage;
