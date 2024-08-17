import React from 'react'
import {assets} from '../../assets/assets' 
import './Main.css'


const Main = () => {
  return (
    <>
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to Go</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
              <p>Brainstorm team bonding activities for our work</p>
              <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
              <p>Improve the readability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>

          <div className="main-bottom">
            <div className="search-box">
              <input type="text" name="" id="" placeholder='Type your Prompt' />
              <div className='imgs-search'>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p>O Gemini pode apresentar informações imprecisas, inclusive sobre pessoas. Por isso, cheque as respostas. Sua privacidade e os apps do Gemini</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Main