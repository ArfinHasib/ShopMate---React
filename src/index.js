import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
	<Router>
		<App />
	</Router>
);
