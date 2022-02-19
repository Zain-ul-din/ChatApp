
import { useRef , useState } from "react"

import SignIn from "./SignIn"
import ChatRoom from "./ChatRoom"
import NavBar from "./NavBar"

// // // // Fire Base SDK
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

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

// //Custom Components



export default function Main (){
    
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
    const dummy = useRef()

    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(1000)
  
    const [messages] = useCollectionData(query, { idField: 'id' })
   
    const [formValue, setFormValue] = useState('')
    
    dummy.current.scrollIntoView({behavior : 'smooth'})

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

