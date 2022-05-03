import React from 'react';

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
      <div className='p-5'>
        <div className='container p-5'>
        <button onClick={shoot}>Take the shot!</button>
        </div>
      </div>
  );
}

export default Football