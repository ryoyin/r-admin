import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const DrawerItem = () => {
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {[
                    {
                        "name": "Home",
                        "path": "",
                        "icon": <InboxIcon />
                    },
                    {
                        "name": "Users",
                        "path": "users",
                        "icon": <InboxIcon />
                    }
                ].map((url, index) => (
                    <Link to ={url.path}>
                        <ListItem button key={url.name}>                        
                            <ListItemIcon>
                                {url.icon}    
                            </ListItemIcon>
                            <ListItemText primary={url.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )
}

export default DrawerItem