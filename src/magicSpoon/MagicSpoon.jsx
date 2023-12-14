import React from 'react'
import "./magicSpoon.css";
import Head from '../Component/Head/Head';
import Navmenu from '../Component/Navmenu/Navmenu';
import LeftCom from '../Component/LeftCom/LeftCom';
import RightCom from '../Component/RightCom/RightCom';
import Protein from '../Component/proteinCom/Protein';
import ProteinStack from '../Component/proteinStack/ProteinStack';
import Footer from '../Component/footer/Footer';
const MagicSpoon = () => {
    return (
        <div className="main">
        <div className="header"><Head/></div>
        <div className="navmenu"><Navmenu/></div>
        <div className="bodycontainer">
          <div className="right">
          <RightCom/>
          </div>
          <div className="left">
          <LeftCom/>
          </div>
        </div>
        <div className="Protein"><Protein/></div>
        <div className="proteinStack"><ProteinStack/></div>
        <div className="footer"><Footer/></div>
      </div>
    
      )
}

export default MagicSpoon