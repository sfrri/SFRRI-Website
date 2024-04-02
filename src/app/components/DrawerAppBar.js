'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link';
import { NavButton } from './NavButton';
import { kebabize } from '@/utils';
import BasicMenu from './BasicMenu';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;
const navItems = [
    {name: 'Home'},
    {
        name: 'Society', 
        subMenu:[
            {name: 'Presidential Address'}, 
            {name: 'SFRRI Executive'}, 
            {name: 'Past Presidents'}, 
            {name: 'History'}, 
            {name: 'Governance & Byelaws'}, 
            {name: 'Trevor Slater Award & Fellowships'}, 
            {name: 'Obituaries'},
        ]
    },
    {name: 'SFRR Societies'},
    {name: 'Membership'},
    {
        name: 'Conferences', 
        subMenu:[
            {name:'Future SFRRI Conferences'},
            {name: 'Past SFRRI Conferences'},
            {name: 'SFRRI Related Conferences'},
            {name: 'Rules for Conference Organisation'},
        ]
    },
    {name: 'Related Meetings'},
    {name: 'SFRRI Outreach'},
    {name: 'Journals'},
    {name: 'Education'},
];

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(0);

    const handleClickListCollapse = (num) => {
        open === 0 ? setOpen(num) : open === num ? setOpen(0) : setOpen(num)
    };
    
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Society for Free Radical Research International
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    item.subMenu != undefined ?
                    <React.Fragment key={i}>
                        <ListItemButton onClick={() => handleClickListCollapse(i)}>
                            <ListItemText primary={item.name} />
                            {open === i ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open === i} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {item.subMenu.map(subMenuItem => {
                                    return <ListItemButton component={Link} href={`/${kebabize(subMenuItem.name)}`} sx={{ pl: 4 }} key={subMenuItem.name}>
                                    <ListItemText onClick={handleDrawerToggle} primary={subMenuItem.name} />
                                </ListItemButton>
                                })}
                            </List>
                        </Collapse>
                    </React.Fragment>
                    :
                    <ListItem key={item.name} disablePadding>                       
                            <ListItemButton component={Link} href={`/${kebabize(item.name)}`} sx={{ textAlign: 'left' }}>
                                <ListItemText 
                                    onClick={handleDrawerToggle} 
                                    primary={item.name} 
                                    sx={{display: 'flex', flexGrow: 1,}}
                                />
                            </ListItemButton>                       
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    sx={{
                        height: '280px',
                        backgroundColor: '#111',
                        position: 'sticky',
                    }}
                    component="nav"
                >
                    <Toolbar
                        sx={{
                            flexDirection: 'column',
                            marginTop: 'auto',
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { lg: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                                fontSize: '48px',
                                background: 'url(/static/images/SFRRI-Logo.png) no-repeat',
                                backgroundPosition: '0 2px',
                                padding: '10px 0 10px 90px',
                            }}
                        >
                            <h1>Society for Free Radical Research International</h1>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                            {navItems.map(item => (
                                
                                item.subMenu != undefined ?

                                <BasicMenu name={item.name} subMenuItems={item.subMenu} key={item.name} />
                                :
                                <NavButton url={kebabize(item.name)} name={item.name} key={item.name} />
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
