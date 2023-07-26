import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currentTime = new Date().getHours();
let greeting = '';

let cssStyle = {}

if(currentTime >= 1 && currentTime < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'Green';
}else if(currentTime >= 12 && currentTime < 18){
  greeting = 'Good Afternoon';
  cssStyle.color = 'Orange';
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'Black';
}



ReactDOM.render(
  <>

      <div>
         <h1> Hello All ,  <span style={cssStyle}> {greeting} </span>  </h1>
      </div>
  </>,
  document.getElementById("root")
);