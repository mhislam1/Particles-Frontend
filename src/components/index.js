import React from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles'


const particleStyles = makeStyles({
    particlesCanva: {
        position: 'absolute'
    }
})

const Home = () => {
    const classes = particleStyles();

    return (
        <>
            <Navbar/>
            <Header/>
            <Particles 
            canvasClassName={classes.particlesCanva}
               params={{
                   particles:{
                     number:{
                         value: 50,
                         density: {
                           enable: true,
                           value_area: 900  
                         }
                     },
                     size: {
                         value: 8,
                         random: true,
                         anim: {
                            enable: true,
                            speed: 8,
                            size_min: 0.1,
                            sync: false 
                         }
                     },
                   },
                   interactivity: {
                    events: {
                        onhover : {
                            enable: true,
                            mode: 'repulse'
                        }
                    }
                }   

               }} 
            />
        </>
    );
};

export default Home;