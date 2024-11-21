import React from 'react'

import logo from '../images/CHLogo.png';

function Logo({width='15%'}) {
  return (
    <div>
    <img src={logo} style={{width}} alt='logo placeholder'/>
    </div>
  )
}

export default Logo