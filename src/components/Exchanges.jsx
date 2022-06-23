import React from 'react'
import {Avatar} from 'antd';
import icon from '../images/cryptocurrency.png';
const Exchanges = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <Avatar src={icon} size="large" />
        <p className="p__opensans">Crypto is very popular among people. Nowadays crypto is accepting to do do trade. It is based on blockchain Technology.</p>
      </div>
    </div>
  </div>
  )
}

export default Exchanges