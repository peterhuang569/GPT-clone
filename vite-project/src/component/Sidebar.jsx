import React from 'react'
import './Sidebar.css'
import {assets} from '../assets/assets'
const Sidebar = (style) => {
  return (
    <div className = "sidebar" style= {style}>
      <div className="top">
        <div className="outer-container">
          <div className="container">
            <div className="inner-container">
              <img className = "logo" src = {assets.Logo}/>
              <div className="new-chat">
                <p className = "chat-summary"> New Chat </p>
              </div>
            </div>
            <img className = 'more-info-icon' src = {assets.plus_icon}/>
          </div>
        </div>

      </div>
      <p className = "recent">
          Recent
      </p>
      <div className="middle">
        
      </div>

      <div className = "bottom">
        <div className="container">
          <img className = "pfp" src ={assets.pfp} alt="" />
          <p className='username'> Username </p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar