import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradiant(45deg, #FE6BBB 30% #FF8E53 90%',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
		color: 'white',
		height: 40,
		padding: '0 30px',
	},
});

function HooksButton() {
	const classes = useStyles();
	return <Button className={classes.root}>Hooks</Button>;
}

export default HooksButton;
