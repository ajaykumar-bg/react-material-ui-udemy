import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';

import theme from './ui/Theme';

import './App.css';

import Header from './ui/Header';
import Footer from './ui/Footer';

import Home from './Home';

const useStyles = makeStyles((theme) => ({
	mainContent: {
		height: '736px',
	},
}));

function App() {
	const classes = useStyles();
	const [currentTab, setCurrentTab] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>

				<main className={classes.mainContent}>
					<Switch>
						<Route exact path='/' component={() => <Home />} />
						<Route
							exact
							path='/services'
							component={() => <div>Services</div>}
						/>
						<Route
							exact
							path='/custom-software'
							component={() => <div>Custom Software</div>}
						/>
						<Route
							exact
							path='/mobile-apps'
							component={() => <div>Mobile Apps</div>}
						/>
						<Route
							exact
							path='/websites'
							component={() => <div>Websites</div>}
						/>
						<Route
							exact
							path='/revolution'
							component={() => <div>The Revolution</div>}
						/>
						<Route
							exact
							path='/about-us'
							component={() => <div>About Us</div>}
						/>
						<Route
							exact
							path='/contact-us'
							component={() => <div>Contact Us</div>}
						/>
						<Route
							exact
							path='/estimate'
							component={() => <div>Estimate</div>}
						/>
					</Switch>
				</main>
				<Footer
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
