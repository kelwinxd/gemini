import './Sidebar.css'
import {assets} from '../../assets/assets' 
import { useState } from 'react'

const Sidebar = () => {

   const [extend, setExtend] = useState(true)

  return (
    <div className='sidebar'>
      <div className="top">
            <img className='menu' src={assets.menu_icon} onClick={() => setExtend(!extend)} alt="" />
            <div className="new-chat">
              <img src={assets.plus_icon} alt=""  />
              {extend ? <p>New Chat</p> : null  } 
            </div>
            <div className="recent">
         <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt=""  />
             {extend ?  <p>What is React...?</p>  : null} 
            </div>
          
        </div>
      </div>
        

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt=""  />
          {extend ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt=""  />
          {extend ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt=""  />
         {extend ? <p>Settings</p> : null} 
        </div>
      </div>
      </div>
  )
}

export default Sidebar