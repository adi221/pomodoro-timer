import React, { useContext, useState } from 'react';

const TimerContext = React.createContext();

const TimerContextProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  const startTimer = () => {
    setStartAnimate(true);
  };
  const pauseTimer = () => {
    setStartAnimate(false);
  };
  const stopTimer = () => {
    setStartAnimate(false);
  };
  const reset = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const setCurrentTimer = activeState => {
    setTimerTime(activeState);
    updateExecute({
      ...executing,
      active: activeState,
    });
  };

  const updateExecute = updatedSettings => {
    setTimerTime(updatedSettings);
    setExecuting(updatedSettings);
  };
  const setTimerTime = settings => {
    const { active, work, shortBreak, longBreak } = settings;
    if (active === 'work') {
      setPomodoro(work);
    } else if (active === 'shortBreak') {
      setPomodoro(shortBreak);
    } else {
      setPomodoro(longBreak);
    }
  };

  const time = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(remainingTime % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  return (
    <TimerContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        stopTimer,
        updateExecute,
        reset,
        setCurrentTimer,
        time,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  return useContext(TimerContext);
};

export default TimerContextProvider;
