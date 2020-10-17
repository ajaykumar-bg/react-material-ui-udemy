import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import footerAdornment from '../../assets/Footer Adornment.svg';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: '100%',
		zIndex: theme.zIndex.modal + 1,
		position: 'relative',
	},
	adornment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '21em',
		},
		[theme.breakpoints.down('xs')]: {
			width: '15em',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	link: {
		color: 'white',
		fontFamily: 'Arial',
		fontSize: '0.75rem',
		fontWeight: 'bold',
		textDecoration: 'none',
	},
	gridItem: {
		margin: '3em',
	},
}));

function Footer(props) {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container justify='center' className={classes.mainContainer}>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid
								item
								onClick={() => props.setCurrentTab(0)}
								component={Link}
								to='/'
								className={classes.link}
							>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid
								item
								onClick={() => {
									props.setCurrentTab(1);
									props.setSelectedIndex(0);
								}}
								component={Link}
								to='/services'
								className={classes.link}
							>
								Services
							</Grid>
							<Grid
								item
								onClick={() => {
									props.setCurrentTab(1);
									props.setSelectedIndex(1);
								}}
								component={Link}
								to='/custom-software'
								className={classes.link}
							>
								Custom Software Development
							</Grid>
							<Grid
								item
								onClick={() => {
									props.setCurrentTab(1);
									props.setSelectedIndex(2);
								}}
								component={Link}
								to='/mobile-apps'
								className={classes.link}
							>
								Mobile App Development
							</Grid>
							<Grid
								item
								onClick={() => {
									props.setCurrentTab(1);
									props.setSelectedIndex(3);
								}}
								component={Link}
								to='/websites'
								className={classes.link}
							>
								Website Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid
								item
								onClick={() => props.setCurrentTab(2)}
								component={Link}
								to='/revolution'
								className={classes.link}
							>
								The Revolution
							</Grid>
							<Grid
								item
								onClick={() => props.setCurrentTab(2)}
								component={Link}
								to='/revolution'
								className={classes.link}
							>
								Vision
							</Grid>
							<Grid
								item
								onClick={() => props.setCurrentTab(2)}
								component={Link}
								to='/revolution'
								className={classes.link}
							>
								Technology
							</Grid>
							<Grid
								item
								onClick={() => props.setCurrentTab(2)}
								component={Link}
								to='/revolution'
								className={classes.link}
							>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid
								item
								onClick={() => props.setCurrentTab(3)}
								component={Link}
								to='/about-us'
								className={classes.link}
							>
								About Us
							</Grid>
							<Grid
								item
								onClick={() => props.setCurrentTab(3)}
								component={Link}
								to='/about-us'
								className={classes.link}
							>
								History
							</Grid>
							<Grid
								item
								onClick={() => props.setCurrentTab(3)}
								component={Link}
								to='/about-us'
								className={classes.link}
							>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid
								item
								onClick={() => props.setCurrentTab(4)}
								component={Link}
								to='/contact-us'
								className={classes.link}
							>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt='black decorative slash'
				src={footerAdornment}
				className={classes.adornment}
			/>
		</footer>
	);
}

export default Footer;
