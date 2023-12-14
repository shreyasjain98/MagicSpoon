import React, { useContext } from 'react'
import "./rightcom.css";
import { BookBoxContext } from '../../contextHook/bookBoxContext';

const RightCom = () => {
    const { addBookBox } = useContext(BookBoxContext);
   
    const handleAddBook = (bookName) => {
        addBookBox(bookName);
    };
    
    return (
        <div className="rightbar">
            <div className="mainfruity">
                <div className="fruity">
                    <img src="Fruity.png" alt="" />
                   
                    <p>Fruity</p>
                    <button onClick={() => handleAddBook("Fruity.png")}>ADD</button>
                    
                </div>
                <div className="fruity">
                    <img src="cocoa.png" alt="" />
                    
                    <p>Cocoa</p>
                    <button onClick={() => handleAddBook("cocoa.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="sugar.png" alt="" />
                    <p>Sugar Cookie</p>
                    <button onClick={() => handleAddBook("sugar.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="cinnamon.png" alt="" />
                    <p>Cinnamon Roll</p>
                    <button onClick={() => handleAddBook("cinnamon.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="peanut.png" alt="" />
                    <p>Peanut Butter</p>
                    <button onClick={() => handleAddBook("peanut.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="Birthday.png" alt="" />
                    <p>Birthday Cake</p>
                    <button onClick={() => handleAddBook("Birthday.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="honey.png" alt="" />
                    <p>Honey Nut</p>
                    <button onClick={() => handleAddBook("honey.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="frosted.png" alt="" />
                    <p>Frosted</p>
                    <button onClick={() => handleAddBook("frosted.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="blueberry.png" alt="" />
                    <p>Blueberry Muffin</p>
                    <button onClick={() => handleAddBook("blueberry.png")}>ADD</button>
                </div>
                <div className="fruity">
                    <img src="maple.png" alt="" />
                    <p>Maple Waffle</p>
                    <button onClick={() => handleAddBook("maple.png")}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default RightCom