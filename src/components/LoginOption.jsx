import React from 'react';
import { Link } from 'react-router-dom';




const LoginOption =()=>

      <div  className="loginOption container">

        <div className="row">
          <div className="col-md-4 col-sm-10 col-center-block">

              <p>Login</p>
              <button type='submit' className="fullWidth"><i className="fa fa-github" aria-hidden="true"></i> Login with Github</button>
              <Link to='/loginEmail'>I am an admin</Link>

          </div>
        </div>

      </div>



export default LoginOption;
