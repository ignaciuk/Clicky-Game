import React from "react";
import "./style.css";

const ImageCard = (props) => {
    return (
        <div>
            <div className="card">
                <div className="img-container">
                    <img onClick={() => props.handleClick(props.id)} src={props.image} alt={props.name} value={props.id} {...props}/>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;