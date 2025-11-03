import React from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import Tooltip from '@mui/material/Tooltip';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import './index.css';

const Sidebar = () => {
  return (
    <div className='main_sidebar'>
        <list>
                <ListItemButton>
                    <ListItemIcon>
                        <LightbulbOutlinedIcon sx={{color:'white'}} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Notes" sx={{color:'white'}}/>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <NotificationsNoneOutlinedIcon sx={{color:'white'}} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Remainders" sx={{color:'white'}}/>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <CreateOutlinedIcon sx={{color:'white'}} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Edit Lables" sx={{color:'white'}} />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ArchiveOutlinedIcon sx={{color:'white'}} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Archive" sx={{color:'white'}}/>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <DeleteSweepOutlinedIcon sx={{color:'white'}} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Trash" sx={{color:'white'}}/>
                </ListItemButton>
        </list>
    </div>
  );
}

export default Sidebar;