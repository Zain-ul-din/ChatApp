
import { useEffect, useRef , useState } from "react"

import SignIn from "./SignIn"
import ChatRoom from "./ChatRoom"
import NavBar from "./NavBar"

// // // // Fire Base SDK
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


// Sound
import NotifySound from './Sound/Notify.mp3' // Notify Sound
import useSound from 'use-sound' // Use Sound hook


firebase.initializeApp({
    apiKey: "AIzaSyAkRV_2Zi_cbiuptzfoSvwmWCsTtYO2zKk",
    authDomain: "newchatapp-98684.firebaseapp.com",
    projectId: "newchatapp-98684",
    storageBucket: "newchatapp-98684.appspot.com",
    messagingSenderId: "597363508673",
    appId: "1:597363508673:web:44ba2f76e1fda6dac61b40",
    measurementId: "G-W9BGCLRZLM"
})

const auth = firebase.auth()
const firestore = firebase.firestore()



// var prevLen = 0 // prev length of messages

export default function Main (){
    // Check React Works

    const [user] = useAuthState(auth);
    return (
        <>
       {!user ?
           <SignIn btnOnClick={()=>{
               const provider = new firebase.auth.GoogleAuthProvider()
               auth.signInWithPopup(provider)
           }}/>  :
          <> 
            <NavBar profilePic={auth.currentUser.photoURL.toString()} OnSignOut= {SignOut}/>
            <ChatRoomFunc/> 
           </>
       }
    </>
    )
    
}

// <ChatRoomFunc/>

function SignOut(){
    if(auth.currentUser)
      auth.signOut()
}

function ChatRoomFunc (){
    const [playSound] = useSound(NotifySound)

    const dummy = useRef()
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(100)
  
    const [messages] = useCollectionData(query, { idField: 'id' })
    

    const [formValue, setFormValue] = useState('')
    
    const [onScreen , onScreenSet] = useState(false)
    
    // window open 
    window.onfocus = ()=>{
      onScreenSet(true)
    } 

    if(!onScreen) playSound() // if user not on screen 

    // window quit
    window.onblur = ()=>{
      onScreenSet(false)
    }
    
    useEffect(()=>{
      dummy.current.scrollIntoView({behavior : 'smooth'})
      window.scrollTo(0,document.body.scrollHeight)
    },[messages])
    
    return( 
       <>
         <ChatRoom
          messageArray={messages} 
          CurrentUserId = {auth.currentUser.uid}
          State = {formValue}
          SetState = {setFormValue}
          firebaseLink = {messagesRef}
          firebaseObj = {firebase}
          profilePic = {auth.currentUser.photoURL.toString()}
          userName = {auth.currentUser.displayName}
          dummyDiv = {dummy}
        />
       </>
    )

    
}

