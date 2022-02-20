import React from "react"

import './Styles/bootstrap.min.css'
import './Styles/Message.css'


export default function Message ({text , time , isUser , AavatarPic , userName , isDummyMsg}){
     const UserMsgClass = (isUser) ?   "my-message" :"sucess"
     const textColor = (isUser) ? 'text-success' : 'text-info' 
     const dummyClass = (isDummyMsg) ? 'dummydiv' : ''
    return(
        <>
          <div className={`message ${UserMsgClass} FrndsMsg content ${dummyClass}`}>
                       <img alt="" class="img-circle medium-image" src={AavatarPic}/>
                   <div class="message-body">
                        <div class="message-info">
                            <h4 className={`fw-light text-uppercase ${textColor} responsiveClass`}>@ {userName} </h4>
                        <h5 className="font-monospace text-muted responsiveTime"> {new Date(time.seconds*1000).toDateString()} </h5>
                  </div>
                <div class="message-text lh-sm responsiveText"> {text}</div> 
          </div>         
          <br/> 
          </div>
      </>
    )
}
// <br> </br> <hr></hr>
/*
   <div className="container darker">
         <img src={ AavatarPic} alt="Avatar" className="right"/>
           <p>{text}</p>
         <span className='time-right'>{new Date(time.seconds*1000).toDateString()}</span>
       </div>
*/
