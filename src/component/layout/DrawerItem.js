import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Icon from '../misc/Icon'

import draweritems from '../../_data/draweritems.json'

const DrawerItem = () => {

    const logoStyle = {
        width: '100%',
        padding: '20px 20px 10px'
    }

    return (
        <div>
            <Toolbar>
                <img src='./mern_icon.png' style={logoStyle} />
            </Toolbar>
            <Divider />
            <List>
                {draweritems.map((application, index) => (
                    <Item application={application} key={index} />
                ))}
            </List>
        </div>
    )
}

const Item = ({application}) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <Link to ={application.path} style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                    <Icon iconname={application.icon} />
                </ListItemIcon>
                <ListItemText primary={application.name} />
            </ListItem>
        </Link>
    )
}

export default DrawerItem