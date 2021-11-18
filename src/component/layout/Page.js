import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import SiteContext from '../../context/SiteContext';

const Page = (props) => {
    const site = React.useContext(SiteContext)
    const drawerWidth = site.drawer_width;

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            { props.children }
        </Box>
    )
}

export default Page