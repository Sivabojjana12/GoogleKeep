import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import './index.css';

function Leftheader() {
  return (
    <div className='leftheader'>
      <div className='refresh_menu'>
        <RefreshIcon fontSize='large' sx={{ color: 'white' }} />
        <GridViewIcon fontSize='large' sx={{ color: 'white' }} />
        <SettingsOutlinedIcon fontSize='large' sx={{ color: 'white' }} />
      </div>
      <div className='profile_menu'>
        <AppsRoundedIcon fontSize='large' sx={{ color: 'white' }} />
      </div>
    </div>
  )
}

export default Leftheader;
