import React from 'react'
import './appdownload.css'
import {assets} from '../../Assets/assets'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better ExperienceDownload <br/>Food order app</p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
      </div>
    </div>
  )
}

export default AppDownload
