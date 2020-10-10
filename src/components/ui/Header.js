import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import ElevationScroll from './ElevationScroll';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
	},
	logo: {
		height: '8em',
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		...theme.typography.button,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '20px',
		height: '45px',
	},
}));

function Header(props) {
	const classes = useStyles();
	const [currentTab, setCurrentTab] = useState(0);

	const handleTabChange = (e, value) => {
		setCurrentTab(value);
	};

	useEffect(() => {
		if (window.location.pathname === '/' && currentTab !== 0) {
			setCurrentTab(0);
		} else if (window.location.pathname === '/services' && currentTab !== 1) {
			setCurrentTab(1);
		} else if (window.location.pathname === '/revolution' && currentTab !== 2) {
			setCurrentTab(2);
		} else if (window.location.pathname === '/about-us' && currentTab !== 3) {
			setCurrentTab(3);
		} else if (window.location.pathname === '/contact-us' && currentTab !== 4) {
			setCurrentTab(4);
		} else if (window.location.pathname === '/estimate' && currentTab !== 5) {
			setCurrentTab(5);
		}
	}, [currentTab]);

	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar color='primary'>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to='/'
							disableRipple
							className={classes.logoContainer}
							onClick={() => setCurrentTab(0)}
						>
							<img alt='company logo' src={logo} className={classes.logo} />
						</Button>

						<Tabs
							value={currentTab}
							onChange={handleTabChange}
							className={classes.tabContainer}
							indicatorColor='primary'
						>
							<Tab
								className={classes.tab}
								component={Link}
								to='/'
								label='Home'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/services'
								label='Services'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/revolution'
								label='The Revolution'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/about-us'
								label='About US'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/contact-us'
								label='Contact Us'
							/>
						</Tabs>
						<Button
							component={Link}
							to='/estimate'
							variant='contained'
							color='secondary'
							className={classes.button}
						>
							Free Estimate
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

export default Header;
