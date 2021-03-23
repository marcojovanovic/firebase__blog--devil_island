import React,{useEffect} from 'react'
import { DevilContext } from '../context';
import { withRouter, Redirect, useParams } from 'react-router-dom';
import { database } from '../firebase/config';


function SingleBlogPage() {

  let { id } = useParams(); 
  const {
    user,
    setUser,
    username,
    isLogged,
    handleSubmitBlog,
    handleChangeBlog,
    blogCollection,
    setUpdateBlog,
    singleBlog,
    setSingleBlog
    
  } = React.useContext(DevilContext);



    useEffect(() => {
      database.collection('blogPost').doc(id).get().then(snap=>{


          

            setSingleBlog(snap.data())


      }) 
    }, []);

    console.log(singleBlog)

    const {autor, sadrzaj, naslov, imgURL} = singleBlog

  return (
    <div>
    <h2>{naslov}</h2>
                <h4>{sadrzaj}</h4>
                <img src={imgURL} alt="" />
                <p>{autor}</p>
  </div>
  )
}

export default SingleBlogPage
