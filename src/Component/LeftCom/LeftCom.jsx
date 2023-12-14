
import "./leftcom.css";
import React, { useContext } from 'react';
import { BookBoxContext } from '../../contextHook/bookBoxContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const LeftCom = () => {

    const { BookBoxes, removeBookBox } = useContext(BookBoxContext);
    
    const removeItem = (index) => {
        removeBookBox(index);
    };
    return (
        <div className="leftbar">
            <div className="contain">
                <div className="outborder">
                    <img className="out" src="outborder.png" alt="" />
                    <div className="selected-images-container">
                        {BookBoxes.map((img, index) => (
                            <div key={index} className={`selected-image-${index + 1}`}>
                                <img src={img} alt={`Selected ${index + 1}`} />
                                <button onClick={() => removeItem(index)} className="remove"><HighlightOffIcon /></button>
                            </div>
                        ))}
                    </div>
                </div>
                <h1>BUILD YOUR OWN BOX</h1>
                <div className="pack">
                    <div className="leftbutton">
                        <button>4 Pack</button>
                    </div>
                    <div className="rightbutton">
                        <button>6 Pack</button>
                    </div>
                </div>
                <div className="Review">
                    <img src="star.png" alt="" />
                    <p>41689 Reviews</p>
                </div>
                <div className="currency">
                    <h2>$39</h2>
                </div>
                <div className="sub">
                    <h3>SUBSCRIBE & SAVE (25%)</h3>
                </div>
                <div className="pick">
                    <p>PICK 4 MORE BOXES</p>
                </div>
                <div className="riskfree">
                    <p> Try risk-free, 100% happiness guaranteed. See terms of use.ingredients</p>
                </div>
            </div>

        </div>
    )
}

export default LeftCom