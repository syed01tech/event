import { useState } from 'react';

export default function useLoggedInTime() {
  const getTime = () => {
    const loggedInTime = sessionStorage.getItem('time');
    return loggedInTime
  };

  const [time, setTime] = useState(getTime());

  const saveTime = loggedInTime => {
    sessionStorage.setItem('time', loggedInTime);
    setTime(loggedInTime);
  };

  return {
    setTime: saveTime,
    time
  }
};
