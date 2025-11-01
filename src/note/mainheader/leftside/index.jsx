import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import './index.css';

function Leftheader() {
  return (
    <div className='leftheader'>
      <div className='refresh_menu'>
        <Tooltip title="Refresh">
        <RefreshIcon className='refresh_icon' fontSize='large' sx={{ color: 'white',padding:'10px' }} />
        </Tooltip>
        <Tooltip title="List View">
        <GridViewIcon className='grid_icon' fontSize='large' sx={{ color: 'white',padding:'10px' }} />
        </Tooltip>
        <Tooltip title="Settings">
        <SettingsOutlinedIcon className='settings_icon' fontSize='large' sx={{ color: 'white',padding:'10px' }} />
        </Tooltip>
      </div>
      <div className='profile_menu'>
        <Tooltip title="Google apps">
        <AppsRoundedIcon className='app_icon' fontSize='large' sx={{ color: 'white',padding:'5px' }} />
        </Tooltip>
        <Tooltip title="Profile" placement="bottom-start">
        <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" />
        </Tooltip>
      </div>
    </div>
  )
}

export default Leftheader;
