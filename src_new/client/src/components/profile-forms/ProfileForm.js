import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { location, skills, githubusername, bio } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <div className="home-title">
        <h1 className="large text-primary">Your thoughts about Covid-19</h1>
        <p className="lead text-light">Tell us how you feel about Covid-19</p>
      </div>
      <form className="form form-profile" onSubmit={onSubmit}>
        <div className="form-group">
          <p className="form-text">City & state suggested (eg. Boston, MA)</p>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <p className="form-text">
            Please use comma separated words and sentence (eg. Horrible, Mask is
            terrible, Stay home forever)
          </p>
          <input
            type="text"
            placeholder="Describe Covid-19"
            name="skills"
            value={skills}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <p className="form-text">
            Which specific part you are most interested about Covid-19 (eg.
            Data, News, Health, Policy)
          </p>
          <input
            type="text"
            placeholder="Your interets"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
        </div>
        <p className="form-text">Something you want to share about yourself</p>
        <div className="form-group">
          <textarea
            placeholder="Something you want to share"
            name="bio"
            value={bio}
            onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
