import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<Main />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
