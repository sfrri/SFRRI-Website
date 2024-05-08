'use client';
import * as React from 'react';
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
import Link from '@mui/material/Link';
import { NavButton } from './NavButton';
import { kebabize } from '@/utils';
import BasicMenu from './BasicMenu';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { CustomBreakpoints } from '@/utils';
import navItems from './NavItems';

const drawerWidth = 257;

function DrawerMenuAppBar(props) {
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
        <Box sx={{
            textAlign: 'center',
            background: '#222',
            paddingBottom: '200px',
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
                                            <ListItemButton
                                                component={Link}
                                                href={`/${kebabize(subMenuItem.name)}`}
                                                sx={{ pl: 4 }}
                                            >
                                                <ListItemText
                                                    onClick={handleDrawerToggle}
                                                    primary={subMenuItem.name}
                                                />
                                            </ListItemButton>
                                        </React.Fragment>
                                    })}
                                </List>
                            </Collapse>
                            <Divider sx={{ background: '#444', }} />
                        </React.Fragment>
                        :
                        <React.Fragment key={item.name}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={`/${item.name === 'Home' ? '' : kebabize(item.name)}`}
                                    sx={{ textAlign: 'left' }}
                                >
                                    <ListItemText
                                        onClick={handleDrawerToggle}
                                        primary={item.name}
                                        sx={{ display: 'flex', flexGrow: 1, }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider sx={{ background: '#444', }} />
                        </React.Fragment>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
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
                        sx={{
                            mr: 2,
                            display: { lg: 'none' },
                            position: 'fixed',
                            top: '12px',
                            right: '-3px',
                            bottom: 'auto',
                            background: '#111',
                            '&:hover': {
                                background: '#111',
                            },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <CustomBreakpoints>
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{
                                width: { sm: '400px', lg: '1068px', },
                                height: { xs: '144px', sm: '107px',/* md: '144px', md: '70px',*/ xl: '70px' },
                                marginBottom: '10px',
                                flexGrow: 1,
                                display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
                                background: 'url(/static/images/SFRRI-Logox2.png) no-repeat',
                                backgroundPosition: { xs: '0 16px', sm: '0 10px',lg: '0 10px', /**/xl: '0 2px', },
                                backgroundSize: '70px',
                                padding: { xs: '26px 40px 10px 90px', xl: '10px 40px 10px 90px', },
                                fontFamily: 'AvenirNextLTProBold',
                                fontSize: { xs: '1.5rem', sm: '1.625rem', lg: '2rem', xl: '3rem', },
                                letterSpacing: { xs: '-1.625px', lg: '-2px', xl: '-3px', },
                            }}
                        >
                            Society for Free Radical Research International
                        </Typography>
                    </CustomBreakpoints>
                    <Box
                        component={Container}
                        sx={{
                            minWidth: '1200px',
                            display: { xs: 'none', lg: 'flex' },
                        }}
                    >
                        {navItems.map(item => (

                            item.subMenu != undefined ?

                                <BasicMenu
                                    name={item.name}
                                    subMenuItems={item.subMenu}
                                    id={item.name}
                                    key={item.name}
                                />
                                :
                                <NavButton
                                    url={item.name === 'Home' ? '' : kebabize(item.name)}
                                    name={item.name}
                                    key={item.name}
                                />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    disableScrollLock={true}
                    sx={{
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

export default DrawerMenuAppBar;
