import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[dateTime.getDay()];

  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1; // Month is 0-indexed
  const day = dateTime.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  return (
    <div className='clockWraper'>
      <h3 className='currentTime'>{formattedTime}</h3>
      <p>{dayOfWeek}, {formattedDate}</p>
    </div>
  );
}

export default CurrentDateTime;