import React from 'react'
import "./protein.css";
const Protein = () => {
    return (
        <div class="container">
            <img src="protein.png" alt="" />

            <div class="lside">
                <div className="com">
                    <h2>HIGH <br />PROTEIN</h2>
                    <p>13g complete protein per <br /> serving.</p>
                </div>
                <div className="com">
                    <h2>KETO- <br />FRIENDLY</h2>
                    <p>4g-5g net carbs per  <br />serving.</p>
                </div>
                <div className="com">
                    <h2>OG <br />SUGAR</h2>
                    <p>No cane sugar, corn syrup,<br /> or sugar  alcohols.</p>
                </div>
            </div>
            <div class="rside">
                <div className="com">
                    <h2>GLUTEN <br />FREE</h2>
                    <p>No gluten ingredients.</p>
                </div>
                <div className="com">
                    <h2>GRAIN <br />FREE</h2>
                    <p>No wheat, rice, or soy.</p>
                </div>
                <div className="com">
                    <h2>NATURAL <br />FLAVORS</h2>
                    <p>No artificial colors or <br /> sweeteners.</p>
                </div>
            </div>
        </div>
    )
}

export default Protein