import React from "react";
import "./style.css";

const ImageCard = (props) => {
    return (
        <div>
            <div className="card">
                <div onClick={() => props.handleClick()} className="img-container">
                    <img src={props.image} alt={props.name}/>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;