import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

const ErrPage = () =>
  <div className ="errPage">
      <Header />
      <div className="w3-main">
        <div className="agile-info">
          <h2>404</h2>
          <h3>SORRY</h3>
          <p>The Page You're Looking for Was Not Found.</p>
          <Link to="/"><i className="fa fa-angle-double-left" aria-hidden="true"></i>go back</Link>
        </div>
      </div>
      <div className="footer-w3l">
        <p>&copy; 2017 Fantasy Error Page. All rights reserved | Design by <a href="#">Ryan</a></p>
      </div>
  </div>


export default ErrPage;
