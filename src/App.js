import React from 'react';
import SetPomodoro from './components/SetPomodoro';
import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation';
import { useTimerContext } from './context/context';

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    reset,
    time,
    startAnimate,
    startTimer,
    pauseTimer,
  } = useTimerContext();

  return (
    <div className='container'>
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul>
            <li>
              <Button
                title='Work'
                activeClass={executing.active === 'work' ? 'active-label' : ''}
                clicked={() => setCurrentTimer('work')}
              />
              <Button
                title='Short Break'
                activeClass={
                  executing.active === 'shortBreak' ? 'active-label' : ''
                }
                clicked={() => setCurrentTimer('shortBreak')}
              />
              <Button
                title='Long Break'
                activeClass={
                  executing.active === 'longBreak' ? 'active-label' : ''
                }
                clicked={() => setCurrentTimer('longBreak')}
              />
            </li>
          </ul>
          <Button title='Back to Settings' clicked={reset} />
          <div className='timer-container'>
            <div className='time-wrapper'>
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {time}
              </CountdownAnimation>
            </div>
          </div>
          <div className='button-wrapper'>
            <Button
              title='Start'
              activeClass={startAnimate ? 'not-active-action' : ''}
              clicked={startTimer}
            />
            <Button
              title='Pause'
              activeClass={!startAnimate ? 'not-active-action' : ''}
              clicked={pauseTimer}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
