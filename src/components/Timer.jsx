import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('stopped');

  const handleStart = () => {
    setStatus('started');
  };

  const handleStop = () => {
    setStatus('stopped');
  }

  useEffect(() => {
    if(status === 'started') {
      setTime(0);
      setTime((time) => time + 1 );

      const interval = setInterval(() => {
        setTime((time) => time + 1 );
      }, 1000);

      return () => {
        clearInterval(interval);
      }
    }
  }, [status])

  return (<div>
    <div>
      {time}
    </div>
    <br />
    <button onClick={handleStart}>Iniciar</button>
    <button onClick={handleStop}>Detener</button>
  </div>);
};

export { Timer };