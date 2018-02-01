import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addOperation, removeOperation, editOperation } from './actions/operations';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleOperations from './selectors/operations';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-select/dist/react-select.css';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));