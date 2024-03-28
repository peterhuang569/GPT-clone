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
      <button className="toggle-btn" style = {{left: isOpen ? '20%' : '0%'}} onClick={toggleSidebar}>
        {isOpen ? <img className = "button" src={assets.left_arrow}/> : <img className = "button" src = {assets.right_arrow}/>}
      </button>

      {isOpen && <Sidebar style = {{width: '30%'}}/>}
      <Content style={{ width: isOpen ? '70%' : '100%' }}/>
    </div>
  )
}

export default App