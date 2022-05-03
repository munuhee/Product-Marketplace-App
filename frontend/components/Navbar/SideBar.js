import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};
function SideBar() {
  return (
    <div className=''>
        <div className="w-full text-gray-900 bg-white rounded-lg dark:bg-gray-700  dark:text-white">
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
                <Typography variant="h6" component="h6">
                    Categories
                </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="BUSINESS CARDS" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText primary="BACKGROUND IMAGES" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="ICONS" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="BRONCHURES" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="FLIERS" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="See More" />
            </ListItem>
        </List>
        </div>
    </div>
  )
}

export default SideBar