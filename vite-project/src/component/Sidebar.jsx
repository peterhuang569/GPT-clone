import {React, useState} from 'react'
import './Sidebar.css'
import {assets} from '../assets/assets'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const Sidebar = (style) => {
  const [username, setUsername] = useState('Login');
  const [pfp, setPfp] = useState();

  //fix this, every reload it rerenders the entire thing
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      
      setUsername(userInfo.name); 
      setPfp(userInfo.picture);
    },
  });



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
        <div className="container" onClick={() => login()}>
          {pfp && <img className = "pfp" src ={pfp} alt="" />}
          <p className='username'> {username} </p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar