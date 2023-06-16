import { useEffect, useState } from "react";

function useStartGame(){
  const [mode, setMode] = useState(null);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [interval, setInterval] = useState(null);
  
  const handleSelectMode = (e) => {
    console.log(e.target.value)
    setStarted(true);
    setMode(e.target.value);
  }

  useEffect(() => {
    if (started) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setInterval(intervalId)
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [started])

  useEffect(() => {
    if (time === 20) {
      setStarted(false);
      setShowModal(true);
      clearInterval(interval);
    }
  }, [time]);

  return { mode, time, started, handleSelectMode, showModal, setShowModal };
}

export default useStartGame;