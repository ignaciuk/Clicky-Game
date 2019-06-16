import React from "react";
import "./style.css";

const ImageCard = (props) => {
    return (
        <div>
            <div onClick={() => props.clickCount(props.id)} className="card">
                <div className="img-container">
                    <img  src={props.image} alt={props.name} value={props.id} {...props}/>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;