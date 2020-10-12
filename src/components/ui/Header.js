import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import ElevationScroll from './ElevationScroll';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '2em',
		},
	},
	logo: {
		height: '6em',
		[theme.breakpoints.down('md')]: {
			height: '5em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '4em',
		},
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
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: 0,
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		'&:hover': {
			opacity: 1,
		},
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
		color: 'white',
	},
	drawerIconContainer: {
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	drawer: {
		backgroundColor: theme.palette.common.blue,
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white',
		opacity: 0.7,
		'&:hover': {
			opacity: 1,
		},
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.orange,
	},
	drawerItemSelected: {
		opacity: 1,
	},
}));

function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const [drawerOpen, setDrawerOpen] = useState(false);
	const [currentTab, setCurrentTab] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleTabChange = (e, newValue) => {
		setCurrentTab(newValue);
	};

	const handleMenuClick = (e) => {
		setAnchorEl(e.currentTarget);
		setMenuOpen(true);
	};

	const handleMenuClose = (e) => {
		setAnchorEl(null);
		setMenuOpen(false);
	};

	const handleMenuItemClick = (e, index) => {
		setAnchorEl(null);
		setMenuOpen(false);
		setSelectedIndex(index);
	};

	const menuOptions = [
		{ name: 'Services', link: '/services' },
		{ name: 'Custom Software Development', link: '/custom-software' },
		{ name: 'Mobile App Development', link: '/mobile-apps' },
		{ name: 'Website Development', link: '/websites' },
	];

	useEffect(() => {
		switch (window.location.pathname) {
			case '/': {
				if (currentTab !== 0) {
					setCurrentTab(0);
				}
				break;
			}
			case '/services': {
				if (currentTab !== 1) {
					setCurrentTab(1);
					setSelectedIndex(0);
				}
				break;
			}
			case '/custom-software': {
				if (currentTab !== 1) {
					setCurrentTab(1);
					setSelectedIndex(1);
				}
				break;
			}
			case '/mobile-apps': {
				if (currentTab !== 1) {
					setCurrentTab(1);
					setSelectedIndex(2);
				}
				break;
			}
			case '/websites': {
				if (currentTab !== 1) {
					setCurrentTab(1);
					setSelectedIndex(3);
				}
				break;
			}
			case '/revolution': {
				if (currentTab !== 2) {
					setCurrentTab(2);
				}
				break;
			}
			case '/about-us': {
				if (currentTab !== 3) {
					setCurrentTab(3);
				}
				break;
			}
			case '/contact-us': {
				if (currentTab !== 4) {
					setCurrentTab(4);
				}
				break;
			}

			default:
				break;
		}
	}, [currentTab]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={currentTab}
				onChange={handleTabChange}
				className={classes.tabContainer}
				indicatorColor='primary'
			>
				<Tab className={classes.tab} component={Link} to='/' label='Home' />
				<Tab
					aria-owns={anchorEl ? 'simple-menu' : undefined}
					aria-haspopup={anchorEl ? 'true' : undefined}
					className={classes.tab}
					onMouseOver={(e) => handleMenuClick(e)}
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
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(menuOpen)}
				onClose={handleMenuClose}
				classes={{ paper: classes.menu }}
				MenuListProps={{ onMouseLeave: handleMenuClose }}
				elevation={0}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={option.name}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							setCurrentTab(1);
							handleMenuClose();
						}}
						selected={i === selectedIndex && currentTab === 1}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={drawerOpen}
				onOpen={() => setDrawerOpen(true)}
				onClose={() => setDrawerOpen(false)}
				classes={{ paper: classes.drawer }}
			>
				<List disablePadding>
					<ListItem
						onClick={() => {
							setDrawerOpen(false);
							setCurrentTab(0);
						}}
						divider
						button
						component={Link}
						to='/'
						selected={currentTab === 0}
					>
						<ListItemText
							className={
								currentTab === 0
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}
							disableTypography
						>
							Home
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setDrawerOpen(false);
							setCurrentTab(1);
						}}
						divider
						button
						component={Link}
						to='/services'
						selected={currentTab === 1}
					>
						<ListItemText
							className={
								currentTab === 1
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}
							disableTypography
						>
							Services
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setDrawerOpen(false);
							setCurrentTab(2);
						}}
						divider
						button
						component={Link}
						to='/revolution'
						selected={currentTab === 2}
					>
						<ListItemText
							className={
								currentTab === 2
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}
							disableTypography
						>
							The Revolution
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setDrawerOpen(false);
							setCurrentTab(3);
						}}
						divider
						button
						component={Link}
						to='/about-us'
						selected={currentTab === 3}
					>
						<ListItemText
							className={
								currentTab === 3
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}
							disableTypography
						>
							About Us
						</ListItemText>
					</ListItem>
					<ListItem
						className={classes.drawerItem}
						onClick={() => {
							setDrawerOpen(false);
							setCurrentTab(4);
						}}
						divider
						button
						component={Link}
						to='/contact-us'
						selected={currentTab === 4}
					>
						<ListItemText
							className={
								currentTab === 4
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}
							disableTypography
						>
							Contact Us
						</ListItemText>
					</ListItem>
					<ListItem
						className={[classes.drawerItem, classes.drawerItemEstimate]}
						onClick={() => {
							setDrawerOpen(false);
						}}
						divider
						button
						component={Link}
						to='/estimate'
					>
						<ListItemText
							className={
								currentTab === 5
									? [classes.drawerItem, classes.drawerItemSelected]
									: classes.drawerItem
							}
							disableTypography
						>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				aria-label=''
				onClick={() => setDrawerOpen(!drawerOpen)}
				disableRipple
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

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
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

export default Header;
