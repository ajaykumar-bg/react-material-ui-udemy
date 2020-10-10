import React, { useState } from 'react';
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
		height: '7em',
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
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar color='primary'>
					<Toolbar disableGutters>
						<img alt='company logo' src={logo} className={classes.logo} />
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
