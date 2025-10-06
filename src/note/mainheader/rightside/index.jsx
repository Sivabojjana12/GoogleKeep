import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import './index.css';

function Rightside() {
  return (
    <div className='Rightsideheader'>
        <div className='Menuicon'>
          <Tooltip title="Main Menu">
            <MenuIcon  className='menuicon' fontSize='large'sx={{color:"white"}}/>
          </Tooltip>
        </div>
        <div className='keepicon'>
          <Tooltip title="Google Keep">
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" sx="width:40px;height:40px"></img>
          </Tooltip>
          <span>Keep</span>
        </div>
        <div className='searchboxdiv'>
          <Tooltip title="Search">
          <SearchIcon/>
          </Tooltip>
          <input type="text" placeholder='Search' className='searchbox'/>
        </div>
    </div>
  )
}

export default Rightside;
