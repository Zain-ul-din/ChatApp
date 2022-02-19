import React from 'react'
import './Styles/bootstrap.min.css'
import './Styles/NavBar.css'

export default function NavBar ({ profilePic , OnSignOut }) {
    return (
         <>
          <nav class="sticky-top  w-100 overrides head">
        <a class="navbar-brand " href="./">
      <img src={profilePic} width="30" height="100%" class="d-inline-block align-top" alt=""/>
                                <h1> CHAT ROOM 🔥 </h1>
     </a>
      <button type='btn' className='btnbtn btn btn-dark' onClick = {(e)=>{
          e.preventDefault()
          OnSignOut()
      }}>
          Sign Out
      </button>
    </nav>
          <div className='OffSet'>
          </div>
         </>
    )
}