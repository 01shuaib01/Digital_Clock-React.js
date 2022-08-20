import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newNow = new Date().toLocaleTimeString();
    setTime(newNow);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Digital clock</button>
    </div>
  );
}

export default App;
