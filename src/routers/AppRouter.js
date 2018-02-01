import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import EditOperationPage from '../components/EditOperationPage';
import SettingsPage from '../components/SettingsPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className="wrapper">
				<Switch>
					<Route path="/" component={DashboardPage} exact={true} />
					<Route path="/edit/:id" component={EditOperationPage} />
					<Route path="/settings" component={SettingsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</div>
		
	</BrowserRouter>
);

export default AppRouter;