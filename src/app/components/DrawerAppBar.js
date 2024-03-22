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
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from '@mui/material/Link';
import theme from '../theme';

const drawerWidth = 240;
const navItems = {
    'Home': '',
    'Society': 'Society',
    'SFRR Societies': 'SFRR-Societies',
    'Membership': 'Membership',
    'Conferences': 'Conferences',
    'Related Meetings': 'Related-Meetings',
    'SFRRI Outreach': 'SFRRI-Outreach',
    'Journals': 'Journals',
    'Education': 'Education',
};

let entries = Object.entries(navItems)

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

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Society for Free Radical Research International
            </Typography>
            <Divider />
            <List>
                {entries.map(([key, val] = entry) => (
                    <ListItem key={val} disablePadding>
                        <Link href={`/${val}`}>
                            <ListItemButton sx={{ textAlign: 'left' }}>
                                <ListItemText primary={key} />
                            </ListItemButton>
                        </Link>
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
                            }}
                        >
                            Society for Free Radical Research International
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                            {/*<ButtonGroup variant="contained" aria-label="Basic button group">*/}
                            {entries.map(([key, val] = entry) => (
                                <Link variant='HomeNav' href={`/${val}`} key={val}>
                                    <Button
                                        sx={{
                                            color: '#fff',
                                            border: '1px solid #111',
                                            borderBottom: '2px solid #111',
                                            borderRadius: '3px',
                                            //background: 'radial-gradient(ellipse at top,#4282dd 0,#1d5097 90%)',
                                            background: 'radial-gradient(ellipse at center, #497abf 0, #1858b1 90%)',
                                            //backgroundImage: 'radial-gradient(at 50% 100%, rgb(68, 122, 199) 0px, rgb(64, 124, 209) 75%)',
                                            fontSize: '18px',
                                            textTransform: 'capitalize',
                                            lineHeight: '50px',
                                            padding: '0 15.5px',
                                        }}
                                    >
                                        {key}
                                    </Button>
                                </Link>
                            ))}
                            {/*</ButtonGroup>*/}
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
            {/*<Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
          cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
          at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
          Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
          numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
          asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
          assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
          soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
          ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
          soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
          Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
          delectus quo eius exercitationem tempore. Delectus sapiente, provident
          corporis dolorum quibusdam aut beatae repellendus est labore quisquam
          praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
          deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
          fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
          recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
          debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
          praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
          voluptate iure labore, repellendus beatae quia unde est aliquid dolor
          molestias libero. Reiciendis similique exercitationem consequatur, nobis
          placeat illo laudantium! Enim perferendis nulla soluta magni error,
          provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
          iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
          Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
          reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
          cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
          consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
          Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
        </Typography>
      </Box>*/}
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
