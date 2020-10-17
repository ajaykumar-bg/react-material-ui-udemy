import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	mainContent: {
        height: "736px"
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}>
            Home Page
        </div>
    )
}

export default Home
