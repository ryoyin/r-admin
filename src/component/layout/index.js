import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import SiteContext from '../../context/SiteContext';
import Header from './Header'
import LeftDrawer from './LeftDrawer';
import Page from './Page';

function ResponsiveDrawer(props) {
    // const site = React.useContext(SiteContext)
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        let mostatus = !mobileOpen
        console.log(`clicked value: ${mostatus}`)
        setMobileOpen(mostatus);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* site header */}
            <Header handleDrawerToggle={handleDrawerToggle} />

            {/* left side bar */}
            <LeftDrawer props={props} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>

            {/* page content */}
            <Page>
                { props.children }
            </Page>

        </Box>
    );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
