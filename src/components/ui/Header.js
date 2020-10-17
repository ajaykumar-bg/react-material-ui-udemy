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
import ListItemText from '@material-ui/core/ListItemText';

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
			height: '5em',
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
		'& .MuiListItemText-root': {
			opacity: 1,
		},
	},
	appBar: {
		zIndex: theme.zIndex.modal + 1,
	},
}));

function Header(props) {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const [drawerOpen, setDrawerOpen] = useState(false);

	const [anchorEl, setAnchorEl] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleTabChange = (e, newValue) => {
		props.setCurrentTab(newValue);
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
		props.setSelectedIndex(index);
	};

	const menuOptions = [
		{ name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
		{
			name: 'Custom Software Development',
			link: '/custom-software',
			activeIndex: 1,
			selectedIndex: 1,
		},
		{
			name: 'Mobile App Development',
			link: '/mobile-apps',
			activeIndex: 1,
			selectedIndex: 2,
		},
		{
			name: 'Website Development',
			link: '/websites',
			activeIndex: 1,
			selectedIndex: 3,
		},
	];

	const routes = [
		{ name: 'Home', link: '/', activeIndex: 0 },
		{
			name: 'Services',
			link: '/services',
			activeIndex: 1,
			ariaOwns: anchorEl ? 'simple-menu' : undefined,
			ariaHaspopup: anchorEl ? 'true' : undefined,
			mouseOver: (e) => handleMenuClick(e),
		},
		{ name: 'The Revolution', link: '/revolution', activeIndex: 2 },
		{ name: 'About Us', link: '/about-us', activeIndex: 3 },
		{ name: 'Contact Us', link: '/contact-us', activeIndex: 4 },
	];

	useEffect(() => {
		[...menuOptions, ...routes].forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`: {
					if (props.currentTab !== route.activeIndex) {
						props.setCurrentTab(route.activeIndex);
						if (
							route.selectedIndex &&
							route.selectedIndex !== props.selectedIndex
						) {
							props.setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				}
				default:
					break;
			}
		});
	}, [props.currentTab, menuOptions, props.selectedIndex, routes, props]);

	const tabs = (
		<React.Fragment>
			<Tabs
				value={props.currentTab}
				onChange={handleTabChange}
				className={classes.tabContainer}
				indicatorColor='primary'
			>
				{routes.map((route, index) => (
					<Tab
						key={`${route.name}_${index}`}
						className={classes.tab}
						component={Link}
						to={route.link}
						label={route.name}
						aria-owns={route.ariaOwns}
						aria-haspopup={route.ariaHaspopup}
						onMouseOver={route.mouseOver}
					>
						{route.name}
					</Tab>
				))}
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
				style={{ zIndex: 1302 }}
				elevation={0}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={`${option.name}_${i}`}
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							props.setCurrentTab(1);
							handleMenuClose();
						}}
						selected={i === props.selectedIndex && props.currentTab === 1}
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
				<div className={classes.toolbarMargin} />
				<List>
					{routes.map((route, index) => (
						<ListItem
							key={`${route.name}_${index}`}
							onClick={() => {
								setDrawerOpen(false);
								props.setCurrentTab(route.activeIndex);
							}}
							classes={{ selected: classes.drawerItemSelected }}
							divider
							button
							component={Link}
							to={route.link}
							selected={props.currentTab === route.activeIndex}
						>
							<ListItemText className={classes.drawerItem} disableTypography>
								{route.name}
							</ListItemText>
						</ListItem>
					))}
					<ListItem
						classes={{
							root: classes.drawerItemEstimate,
							selected: classes.drawerItemSelected,
						}}
						onClick={() => {
							setDrawerOpen(false);
						}}
						divider
						button
						component={Link}
						to='/estimate'
					>
						<ListItemText className={classes.drawerItem} disableTypography>
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
				<AppBar position='fixed' color='primary' className={classes.appBar}>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to='/'
							disableRipple
							className={classes.logoContainer}
							onClick={() => props.setCurrentTab(0)}
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
