import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Slider
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.png'
import PFP from '../PFP.png'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'

// CSS Styling
const myStyles = makeStyles( theme => ({
    menuSliderContainer:{
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'violet'
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio Projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
]

const Navbar = () => {
    const classes = myStyles()
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };
    // }
    const sideBar = slider => (
        <Box component='div' className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)}>
        <Avatar src={avatar} alt='Mohammad Islam' className={classes.avatar}/> 
        <Divider />
        <List>
            {menuItems.map((listItem, key) => (
            <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>
                    {listItem.listIcon}
                </ListItemIcon>
                <ListItemText primary={listItem.listText}/>            
            </ListItem>
            ))}
        </List> 
     </Box>   
    )
    return (
     <>
     <Box component='nav'>
         <AppBar position='static' style={{background: '#222'}}>
             <Toolbar>
                 <IconButton onClick={toggleSlider("right", true)}>
                    <ArrowBack style={{color: 'tomato'}} />
                 </IconButton>
                    <Typography variant='h5' style={{color: 'violet'}}>
                        Portfolio Website
                    </Typography>
                    <MobileRightMenuSlider open={state.right} anchor='right' onClose={toggleSlider('right', false)}>
                        {sideBar("right")}
                    </MobileRightMenuSlider>
             </Toolbar>
         </AppBar>
     </Box>
     </>   
    );
};

export default Navbar;