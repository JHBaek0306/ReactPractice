import React, { useState, useEffect } from 'react';
import TimeDisplay from './components/TimeDisplay';
import ControlButtons from './components/ControlButtons';
import LapList from './components/LapList';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = window.setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const onStartStop = () => {
    setIsRunning(!isRunning);
  }

  const onReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  }

  const onLap = () => {
    setLaps([...laps, time]);
  }

  return (
    <div>
      <TimeDisplay time={time}></TimeDisplay>
      <ControlButtons
        isRunning={isRunning}
        onStartStop={onStartStop}
        onReset={onReset}
        onLap={onLap}></ControlButtons>
      <LapList laps={laps}></LapList>
    </div>
  )
};

export default App;
