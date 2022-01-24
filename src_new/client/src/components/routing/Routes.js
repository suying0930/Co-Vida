import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile-forms/ProfileForm';
import Profiles from '../profiles/Profiles';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Data from '../content/Data';
import Health from '../content/Health';
import News from '../content/News';
import Policy from '../content/Policy';

const Routes = props => {
  return (
    <section className="container pb-5 mb-5">
      <Alert />
      <Switch>
        <Route exact path="/data" component={Data} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/news" component={News} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
