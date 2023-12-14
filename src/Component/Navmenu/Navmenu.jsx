import React from 'react'
import "./navmenu.css";
const Navmenu = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <p>ABOUT US</p>
        <h1>MAGIC <br /> SPOON</h1>
        <p>SHOP NOW</p>
        <div className="navicon">
          <div><img src="user.png" alt="" /></div>
          <div className='cap'><img src="magic_cap.png" alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Navmenu