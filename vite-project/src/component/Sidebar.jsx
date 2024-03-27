import {React, useState} from 'react'
import './Sidebar.css'
import {assets} from '../assets/assets'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className = {`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <img className = "button" src={assets.left_arrow}/> : <img className = "button" src = {assets.right_arrow}/>}
      </button>
      
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

      <div className="bottom">
        
      </div>
    </div>
  )
}

export default Sidebar