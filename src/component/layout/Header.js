import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SiteContext from '../../context/SiteContext';
import AppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({handleDrawerToggle}) => {

  const site = useContext(SiteContext)
  const drawerWidth = site.drawer_width;

  const toolbarStyle = {
    background: '#ffffff',
    color: '#000000'
  }

  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
      <Toolbar style={toolbarStyle}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ display: 'flex', width: '100%' }}>
          <Typography variant="h6" noWrap component="div" style={{flexGrow: '1'}}>
            { site.name }
          </Typography>
          <Typography noWrap component="div" style={{flexGrow: '1', verticalAlign: 'middle', fontSize: '12px', position: 'relative', top: '8px'}} align="right">
            <LogoutIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }}/> Logout
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header