import './css/bootstrap.min.css';
//import './css/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

const App = React.createClass({
	getInitialState() {
		//return StepStore.getState();
		return {
		}
	},

	render() {
		return (
			<div className="container">
				<h1>Hello World</h1>
				<Board />
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
