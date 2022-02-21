

import Message from "./Message"
import './Styles/ChatUi.css'
import './Styles/bootstrap.min.css'
import './Styles/ChatRoom.css'
import './Main.js'
import { useState } from "react"


export default function ChatRoom ({messageArray , CurrentUserId , profilePic , State , SetState , firebaseLink  ,firebaseObj , userName
  , dummyDiv
}) {
   
    const [showLoader , SetLoader] = useState(false)
    

    const SubmitData = async () => {
        SetLoader(true)
        await firebaseLink.add({
            text: State ,
            createdAt: firebaseObj.firestore.Timestamp.now() ,
            name : userName ,
            uid : CurrentUserId ,
            pic: profilePic ,
        })
        SetState('')
        SetLoader(false)
        dummyDiv.current.scrollIntoView({behavior : 'smooth'})
    }
    
     return (
       
         <>
         {!messageArray ? <>No Message in ChatRoom 🤔</> : <> </>}

         {  messageArray &&
           messageArray.map ( msg =>  
            <Message key={msg.id}  
            text= {msg.text} time={msg.createdAt} 
            AavatarPic={msg.pic} isUser = {CurrentUserId === msg.uid} 
            userName= {msg.name}
            />
           )
         }

         <Message 
            text= {'hi there 🖐'} time={''} 
            AavatarPic={''} isUser = {false} 
            userName= {'bot'}
            isDummyMsg = {true}
          />
         
        <div className='TextInputArea'>  
        <div className="msger-inputarea">
         <input  value={State}
         type="text" className="msger-input"
             onChange={(e)=>{
                {SetState(e.target.value)}
             }}
         placeholder="Enter your message..." />
         <Loader show={showLoader}/>
          <button type="submit" className="msger-send-btn" 
                onClick={
                    (e) =>{
                        e.preventDefault()
                        if(State.length >= 1 && State.length <= 1000){
                           SubmitData()
                        }  else if(State.length >= 1000) alert('Message is too long!!')
                    }
                }
          >Send</button>
        </div>
        </div>
        <div ref={dummyDiv} className= 'bottomOffset d-flex'/>
         </>
     )
}


function Loader ({show}) {
  return(
    show ?
    <div className="spinner-grow tc mt-2" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>: ''
  )
}

