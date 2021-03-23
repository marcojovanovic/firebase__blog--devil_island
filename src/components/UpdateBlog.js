import React from 'react';
import { auth} from '../firebase/config';
import { DevilContext } from '../context';
import { withRouter, Redirect } from 'react-router-dom';


function CreateBlog(props) {
  let { history } = props;

  const { user, setUser, username, isLogged, handleSubmitBlog, handleChangeBlog, updateBlog } = React.useContext(DevilContext);

  const handleLogOut = () => {
    if (user) {
      setUser(null);
      auth.signOut().then(console.log('sign out'));
      history.push('/login');
    }
  };

  
  if(isLogged === false){
 
    return <Redirect to='/' />
 
   }

   

  return (
    <div>
         { user && username}
      <button onClick={handleLogOut} type="submit" className="signupbtn">
        Sign Out
      </button>

      <h1 className='text-center'>Napravi Blog</h1>

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
            <input
              type="text"
              className="form-control"
              onChange={handleChangeBlog}
              name="sadrzaj"
            />
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
             Update Post
          </button> 


        
        
      
        </form>
      </div>


    </div>
  );
}

export default withRouter(CreateBlog);
