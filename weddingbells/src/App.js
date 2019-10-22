import React, { Component } from "react";
import "./styles/App.css";

import { Route, Switch } from "react-router-dom";

import { LandingPageView } from "./views";

class App extends Component {
	render() {
		return (
			<div className="App">
				This is the best Wedding Planner App ever!
				<LandingPageView />
			</div>
		);
	}
}

export default App;
