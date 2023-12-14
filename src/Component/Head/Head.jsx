import React, { useState, useEffect } from 'react';

import './head.css';
const Head = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ccc');
  useEffect(() => {
    const interval = setInterval(() => {
    
      setBackgroundColor(generateRandomColor());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  };
  
  return (
   <div style={{ backgroundColor, transition: 'background-color 4s' }} className='heder'>
    <p>✨High Protein, Keto-Friendly, and 60,000+ 5-Star Reviews✨</p>
   </div>
  )
}

export default Head