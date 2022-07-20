import React from 'react'
import './App.css';


function Day() {
    (function() {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    
        
        Date.prototype.getDayName = function() {
            return days[ this.getDay() ];
        };
    })();
    
    var now = new Date();
    var day = now.getDayName();
    
  return (
      
    <div>
        <h2> Whoop, it's  {day}🌝 ☕ </h2>
    </div>
  )
}

export default Day