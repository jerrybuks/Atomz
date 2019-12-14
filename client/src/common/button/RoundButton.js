import React from 'react';
import './Button.css'
function RoundButton(props) {
  const { name, color} = props;
  return (
     <button className="button round-btn" style={{ backgroundColor : `${color}`}} onClick={props.clicking}>{name}</button>
  );
}

export default RoundButton;
