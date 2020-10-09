import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';

import theme from './ui/Theme';

import './App.css';

import Header from './ui/Header';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Header />
				Hello
			</div>
		</ThemeProvider>
	);
}

export default App;
