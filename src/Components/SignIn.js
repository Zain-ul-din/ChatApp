
import React from "react"

import './Styles/SignIn.css'

export default function SignIn ({btnOnClick}){
    return(
        <>
          <div className="MainDiv">
             <h2 className="SignInText">
                 WELCOME TO CHAT ROOM 😊
             </h2>
             <a  onClick={btnOnClick}>
                    
             <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

         <div className="google-btn">
           <div className="google-icon-wrapper">
           <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
             </div>
           <p className="btn-text"><b>Sign in with google</b></p>
         </div>
        </a>
     </div>
        </>
    )
}