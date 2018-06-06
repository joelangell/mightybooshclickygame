import React from "react";
import "./ClickCard.css";


const ClickCard = props => (
  <div className={props.className} >
    <div className="img-container">
      <img alt={props.name} src={props.image} value = {props.id} onClick={() => props.handleClick(props.id)}/>
    </div>
  </div>
);

export default ClickCard;
