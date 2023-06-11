import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  function getNewColor (){
    setColor(randomColor)
  }
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState('#FFF')

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child getNewColor={getNewColor} setChildColor={setChildColor} childColor={childColor}/>
      <Child getNewColor={getNewColor} setChildColor={setChildColor} childColor={childColor}/>
    </div>
  );
}

export default Parent;
