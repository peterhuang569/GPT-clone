import React, { useState } from 'react';
import './Content.css'
import {assets} from '../assets/assets'
const Content = (style) => {

  const [ prompted, setPrompted ] = useState(false);
  const [ chat, setChat ] = useState([]);

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const input = event.target.value 
      event.target.value = ''
      console.log(await query(input));
    }
  };

  const ListItem = ({ item, index }) => {

    return(
      <div className = "chats">
        
        { index % 2 === 0 ? <img className = "chat-pfp" src={assets.pfp} alt="" /> : <img className = "chat-pfp" src={assets.Logo} alt="" /> }
        <div>
          { index % 2 === 0 ? <h2 className="name"> You </h2> : <h2 className="name"> ChatGPT </h2>}
          
          {item}
        </div>

      </div>
    ) 
  };

  async function query(input) {
    const response = await fetch('http://127.0.0.1:5000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    const responseData = await response.json();
    setChat([...chat, input, responseData]);
    setPrompted(true);
    return responseData
  }

  const handleClick = async (input) => {
    const result = await query(input);
  }

  return (
    <div className="wrapper" style={{ justifyContent: prompted ? 'start' : 'center' }}>
      <div className="content">

        {!prompted && 
        <div className="center">
            <img className = "logo" src={assets.Logo} alt="" />
            <p className = "center-text">
                How can I help you today?
            </p>
        </div>}
        
        {!prompted && 
        <div className="boxes">

          <div onClick = {() => handleClick("hi")} className="box-one">
            <h2>
              Write a Python script
            </h2>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
          <div onClick = {() => handleClick("hi")} className="box-two">
            <h2>
              Write a Python script
            </h2>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
          <div onClick = {() => handleClick("hi")} className="box-three">
            <h2>
              Write a Python script
            </h2>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
          <div onClick = {() => handleClick("hi")} className="box-four">
            <h2>
              Write a Python script
            </h2>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
        </div>}
        
        {prompted &&
          <ul className = "chat-history">
            {chat.map((item, index) => (
              <ListItem item={item} key = {index} index = {index}/>
            ))}
          </ul>
        }
      </div>



      <div className='bottom'>
        <div className="textbar">
          <input 
            type="text" 
            className="textbox" 
            placeholder='Message ChatGPT...'
            onKeyDown={handleKeyPress}
          />
        </div>

        <p className = "discretion">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>

    </div>
    
  )
}

export default Content