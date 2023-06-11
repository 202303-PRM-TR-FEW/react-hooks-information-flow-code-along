import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ childColor, getNewColor, setChildColor }) {
  let reandomColor = getRandomColor()
  const handleClick = () => {
    getNewColor()
    setChildColor(reandomColor)
  }
  return <div className="child" style={{ backgroundColor: childColor }}  onClick={handleClick}/>;
}

export default Child;
