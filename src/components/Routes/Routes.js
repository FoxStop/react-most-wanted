import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent   from '../../components/LoadingComponent/LoadingComponent';
import { RestrictedRoute }   from '../../containers/RestrictedRoute';
import createHistory from 'history/createBrowserHistory'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const history = createHistory();

function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: LoadingComponent,
  }, opts));
};

const AsyncDashboard = MyLoadable({loader: () => import('../../containers/Dashboard/Dashboard')});
const AsyncAbout = MyLoadable({loader: () => import('../../containers/About/About')});
const AsyncPublicChats = MyLoadable({loader: () => import('../../containers/PublicChats/PublicChats')});
const AsyncMyAccount = MyLoadable({loader: () => import('../../containers/MyAccount/MyAccount')});
const AsyncTasks = MyLoadable({loader: () => import('../../containers/Tasks/Tasks')});
const AsyncTask = MyLoadable({loader: () => import('../../containers/Tasks/Task')});
const AsyncCompanies = MyLoadable({loader: () => import('../../containers/Companies/Companies')});
const AsyncCompany = MyLoadable({loader: () => import('../../containers/Companies/Company')});
const AsyncUsers = MyLoadable({loader: () => import('../../containers/Users/Users')});
const AsyncSignIn = MyLoadable({loader: () => import('../../containers/SignIn/SignIn')});
const AsyncPageNotFound = MyLoadable({loader: () => import('../../components/PageNotFound/PageNotFound')});

const Routes = (props, context) => {

  return (

    <Router history={history} >
      <Switch >
        <RestrictedRoute type='private' path="/" exact component={AsyncDashboard} />
        <RestrictedRoute type='private' path="/dashboard" exact component={AsyncDashboard} />

        <RestrictedRoute type='private' path="/loading" exact component={LoadingComponent} />

        <RestrictedRoute type='private' path="/public_chats" exact component={AsyncPublicChats} />

        <RestrictedRoute type='private' path="/tasks" exact component={AsyncTasks} />
        <RestrictedRoute type='private' path="/tasks/edit/:uid" exact component={AsyncTask} />
        <RestrictedRoute type='private' path="/tasks/create" exact component={AsyncTask} />

        <RestrictedRoute type='private' path="/companies" exact component={AsyncCompanies} />
        <RestrictedRoute type='private' path="/companies/edit/:uid" exact component={AsyncCompany} />
        <RestrictedRoute type='private' path="/companies/create" exact component={AsyncCompany} />

        <RestrictedRoute type='private' path="/users" exact component={AsyncUsers} />
        <RestrictedRoute type='private' path="/about" exact component={AsyncAbout}  />
        <RestrictedRoute type='private' path="/my_account"  exact component={AsyncMyAccount} />
        <RestrictedRoute type='public' path="/signin" component={AsyncSignIn} />
        <Route component={AsyncPageNotFound} />
      </Switch>
    </Router>


  );
}

export default Routes;
