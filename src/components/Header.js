import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';
import avatar from '../avatar.png'
import Typed from 'react-typed'
import { makeStyles } from '@material-ui/core/styles';
import { textAlign } from '@material-ui/system';

// CSS Styling
const typingStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    
    title:{
        color: 'violet'
    },
    subtitle:{
        color: 'red',
        marginBottom:'3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%', //this was 50% on the tutorial 
        left: '50%',
        transform:'translate(-50%, 50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
            
}));

const Header = () => {
    const classes = typingStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
                <Avatar src={avatar} alt='Mohammad Islam' className={classes.avatar}/>
            </Grid>
            <Typography variant='h4' className={classes.title}>
                <Typed strings={['Mohammad Islam']} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant='h5' className={classes.subtitle}>
                <Typed strings={['Software Engineering', 'Web Development', 'Data Science']} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
        </Box>
    );
};

export default Header