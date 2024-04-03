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
import { Container } from '@mui/material';
import Image from 'next/image';

const drawerWidth = 257;
const navItems = [
    { name: 'Home' },
    {
        name: 'Society',
        subMenu: [
            { name: 'Presidential Address' },
            { name: 'SFRRI Executive' },
            { name: 'Past Presidents' },
            { name: 'History' },
            { name: 'Governance & Byelaws' },
            { name: 'Trevor Slater Award & Fellowships' },
            { name: 'Obituaries' },
        ]
    },
    { name: 'SFRR Societies' },
    { name: 'Membership' },
    {
        name: 'Conferences',
        subMenu: [
            { name: 'Future SFRRI Conferences' },
            { name: 'Past SFRRI Conferences' },
            { name: 'SFRRI Related Conferences' },
            { name: 'Rules for Conference Organisation' },
        ]
    },
    { name: 'Related Meetings' },
    { name: 'SFRRI Outreach' },
    { name: 'Journals' },
    { name: 'Education' },
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
        /*<div style={{height: '100%', position: 'relative', overflow:'hidden'}}>*/
            <Box sx={{ 
                textAlign: 'center', 
                background: '#222', 
                /*position: 'absolute',
                top: 0,
                left: 0,
                bottom: '-17px',
                right: '-17px',
                overflow: 'scroll',*/
            }}>
                <Typography variant="h6" sx={{
                    height: '172px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    py: 2,
                    backgroundColor: '#447ac7',
                    background: 'radial-gradient(ellipse at top,#4282dd 0,#1d5097 90%)',
                }}>
                    {/*Society for Free Radical Research International*/}
                    <Image
                        src='/static/images/SFRRI-New-logo-no-mapx2.png'
                        width={168}
                        height={81}
                        alt='SFRRI Logo'
                    />
                </Typography>
                <Divider />
                <List
                    sx={{
                        color: '#fff',
                        background: '#222',
                    }}
                >
                    {navItems.map((item, i) => (
                        item.subMenu != undefined ?
                            <React.Fragment key={item.name}>
                                <ListItemButton onClick={() => handleClickListCollapse(i)}>
                                    <ListItemText primary={item.name} />
                                    {open === i ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open === i} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.subMenu.map(subMenuItem => {
                                            return <React.Fragment key={subMenuItem.name}>
                                                <Divider sx={{ background: '#333', }} />
                                                <ListItemButton component={Link} href={`/${kebabize(subMenuItem.name)}`} sx={{ pl: 4 }}>
                                                    <ListItemText onClick={handleDrawerToggle} primary={subMenuItem.name} />
                                                </ListItemButton>
                                            </React.Fragment>
                                        })}
                                    </List>
                                </Collapse>
                                <Divider sx={{ background: '#444', }} />
                            </React.Fragment>
                            :
                            <>
                                <ListItem key={item.name} disablePadding>
                                    <ListItemButton component={Link} href={`/${item.name === 'Home' ? '' : kebabize(item.name)}`} sx={{ textAlign: 'left' }}>
                                        <ListItemText
                                            onClick={handleDrawerToggle}
                                            primary={item.name}
                                            sx={{ display: 'flex', flexGrow: 1, }}
                                        />
                                    </ListItemButton>

                                </ListItem>
                                <Divider sx={{ background: '#444', }} />
                            </>
                    ))}
                </List>
            </Box>
        /*</div>*/
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    sx={{
                        height: { xs: '172px', lg: '280px', },
                        backgroundColor: '#111',
                        position: 'sticky',
                    }}
                    component="nav"
                >
                    <Toolbar
                        sx={{
                            flexDirection: { xs: 'row', lg: 'column' },
                            marginTop: 'auto',
                            padding: { xs: '0 24px', lg: 0, },
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { lg: 'none' }, bottom: '8px', }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{
                                height: '70px',
                                marginBottom: '10px',
                                flexGrow: 1,
                                display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
                                //fontSize: '3rem',
                                background: 'url(/static/images/SFRRI-Logox2.png) no-repeat',
                                backgroundPosition: { xs: '0 -2px', lg: '0 2px', },
                                backgroundSize: '70px',
                                padding: '10px 0 10px 90px',
                            }}
                        >
                            <h1>Society for Free Radical Research International</h1>
                        </Typography>
                        <Box component={Container} sx={{ minWidth: '1200px', display: { xs: 'none', lg: 'flex' },/*flexDirection: 'row',*/ }}>
                            {navItems.map(item => (

                                item.subMenu != undefined ?

                                    <BasicMenu name={item.name} subMenuItems={item.subMenu} key={item.name} />
                                    :
                                    <NavButton url={item.name === 'Home' ? '' : kebabize(item.name)} name={item.name} key={item.name} />
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
                    disableScrollLock={ true }
                    sx={{
                        /*height: '100%',
                        overflow: 'hidden',
                        position: 'relative',*/
                        display: { md: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            background: '#222',
                        },
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
