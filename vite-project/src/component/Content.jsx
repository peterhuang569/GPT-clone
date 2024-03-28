import React from 'react'
import './Content.css'
import {assets} from '../assets/assets'
const Content = (style) => {
  return (
    <div className = 'content' style = {style}>
        <div className="center">
            <img className = "logo" src={assets.Logo} alt="" />
            <p className = "center-text">
                How can I help you today?
            </p>
        </div>
        <div className="boxes">
          <div className="box-one">
            <h>
              Write a Python script
            </h>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
          <div className="box-two">
            <h>
              Write a Python script
            </h>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
          <div className="box-three">
            <h>
              Write a Python script
            </h>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
          <div className="box-four">
            <h>
              Write a Python script
            </h>
            <p>
              to automate sending my daily emails reports
            </p>
          </div>
        </div>
        
        <div className="textbar">
          <input type="text" className="textbox" placeholder='Message ChatGPT...'/>

        </div>
        <p className = "discretion">
            ChatGPT can make mistakes. Consider checking important information.
        </p>
    </div>
  )
}

export default Content