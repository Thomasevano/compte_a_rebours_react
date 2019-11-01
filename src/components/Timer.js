import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(40);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function changeBackgroundColor () {
    if (40 >= seconds) {
      document.getElementById("countdown-app").style.background ="blue";
      if (20 >= seconds) {
        document.getElementById("countdown-app").style.background ="orange";
        if(12 >= seconds) {
          document.getElementById("countdown-app").style.background ="red";
        }
      }
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if (seconds === 0){
        reset();
      }
      changeBackgroundColor();
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="time-app" id="countdown-app">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;