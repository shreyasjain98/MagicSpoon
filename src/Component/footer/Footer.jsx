import React from 'react'
import "./footer.css";
const Footer = () => {
    return (
        <div className="footcontain">
            <div className="footcontain1">
                <h1>MAGIC SPOON</h1>
                <p>Terms of Use Privacy Policy Accessibility Policy FAQ <br />Become an Affiliate Reviews Jobs Track Orders Store Locator <br /> Terms of Service Refund policy For Creators</p>
                <button>CONTACT US</button>
                <h3>Don't miss the magic:</h3>
                <div className="foot2">
                    <input type="email" placeholder='Your email' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Footer