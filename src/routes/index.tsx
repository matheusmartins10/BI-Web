import React from 'react';
import { Switch } from 'react-router-dom';
import Router from './Route';
import RouteAdmin from './RouteAdmin';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';

import SignInAdmin from '../pages/SignInAdmin';
import DashboardAdmin from '../pages/DashboardAdmin';
import SignupAdmin from '../pages/SignUpAdmin';
import Logistica from '../pages/Logistica';
import CustoLogistica from '../pages/CustoLogistica';
import Dre from '../pages/Dre';
import Geolocalizacao from '../pages/Geolocalizacao';

const Routes: React.FC = () => (
  <Switch>
    <Router path="/" exact component={SignIn} />
    <RouteAdmin path="/signup" component={SignUp} isPrivate />
    <Router path="/forgot-password" component={ForgotPassword} />
    <Router path="/reset-password" component={ResetPassword} />
    <Router path="/dashboard" component={Dashboard} isPrivate />
    <Router path="/bi/logistica" component={Logistica} isPrivate />
    <Router path="/bi/custo-logistica" component={CustoLogistica} isPrivate />
    <Router path="/bi/dre" component={Dre} isPrivate />
    <Router path="/bi/geolocalizacao" component={Geolocalizacao} isPrivate />

    <RouteAdmin path="/signin/admin" component={SignInAdmin} />
    <RouteAdmin path="/admin" component={DashboardAdmin} isPrivate />
    <RouteAdmin path="/new/admin" component={SignupAdmin} isPrivate />
  </Switch>
);

export default Routes;
