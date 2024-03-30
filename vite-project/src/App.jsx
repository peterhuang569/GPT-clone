import {React, useState} from 'react'
import './App.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import {assets} from './assets/assets';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className = "app">


      {isOpen && <Sidebar/>}
      <Content />
      
      <button className="toggle-btn" style = {{left: isOpen ? '300px' : '0px'}} onClick={toggleSidebar}>
        {isOpen ? <img className = "button" src={assets.left_arrow}/> : <img className = "button" src = {assets.right_arrow}/>}
      </button>
    </div>
  )
}

export default App