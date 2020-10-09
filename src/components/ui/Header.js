import React from 'react';

import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ElevationScroll from './ElevationScroll';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
	},
	logo: {
		height: '7em',
	},
}));

function Header(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar color='primary'>
					<Toolbar disableGutters>
						<img alt='company logo' src={logo} className={classes.logo} />
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

export default Header;
