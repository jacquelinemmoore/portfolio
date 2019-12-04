import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {App} from "./Home/App";
import {Navigator} from "./Infrastructure/Navigator";

ReactDOM.render(
	<div>
		<Navigator/>
		<App/>
	</div>, document.getElementById('root'));
registerServiceWorker();
