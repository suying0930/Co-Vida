import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  return (
    <section className='landing'>
      <div className=''>
        <div className='landing-inner'>
          <div className='landing-inner-text'>
            <h1 className='x-large'>Co-Vida Database</h1>
            <p className='lead'>
              'Vida' means ‘Life’ in spanish, 'Co' has the meaning of ‘Together’ in english.
            <br></br>Join Co-Vida to share, learn and save life together!
          </p>
          </div>
          <div>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
