import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import './index.css';

function Rightside() {
  return (
    <div className='Rightsideheader'>
        <div className='Menuicon'>
          <Tooltip title="Menu">
            <MenuIcon className='menuicon' fontSize='large'/>
          </Tooltip>
        </div>
        <div>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" sx="width:40px;height:40px"></img>
          <span>Keep</span>
        </div>
        
    </div>
  )
}

export default Rightside;
