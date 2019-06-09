import React from "react";
import "./style.css";

const ImageCard = (props) => {
    return (
        <div>
            <div className="img-container">
                {/* <img alt={props.name} src={props.image} /> */}
                <img src="https://www.fillmurray.com/240/240" alt="bill murray"/>
            </div>
        </div>
    )
}

export default ImageCard;