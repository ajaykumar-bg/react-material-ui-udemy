import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
// import { makeStyles } from '@material-ui/styles';

import theme from './ui/Theme';

import './App.css';

import Header from './ui/Header';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// }));

function App() {
	// const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			{/* <div className={classes.root}>
				
			</div> */}
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={() => <div>Home</div>} />
					<Route exact path='/services' component={() => <div>Services</div>} />
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
					<Route exact path='/websites' component={() => <div>Websites</div>} />
					<Route
						exact
						path='/revolution'
						component={() => <div>The Revolution</div>}
					/>
					<Route exact path='/about-us' component={() => <div>About Us</div>} />
					<Route
						exact
						path='/contact-us'
						component={() => <div>Contact Us</div>}
					/>
					<Route exact path='/estimate' component={() => <div>Estimate</div>} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
