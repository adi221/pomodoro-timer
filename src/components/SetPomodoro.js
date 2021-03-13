import React, { useState } from 'react';
import Button from './Button';
import { useTimerContext } from '../context/context';

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 40,
    shortBreak: 5,
    longBreak: 10,
    active: 'work',
  });

  const { updateExecute } = useTimerContext();

  const handleChange = e => {
    const { name, value } = e.target;
    setNewTimer({ ...newTimer, [name]: +value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className='form-container'>
      <form noValidate>
        <div className='inputs-wrapper'>
          <div className='input-wrapper'>
            <input
              type='input'
              name='work'
              onChange={handleChange}
              value={newTimer.work}
            />
            <p>
              Work Duration <br /> (Mins)
            </p>
          </div>
          <div className='input-wrapper'>
            <input
              type='input'
              name='shortBreak'
              onChange={handleChange}
              value={newTimer.shortBreak}
            />
            <p>
              Short Break <br /> Duration (Mins)
            </p>
          </div>
          <div className='input-wrapper'>
            <input
              type='input'
              name='longBreak'
              onChange={handleChange}
              value={newTimer.longBreak}
            />
            <p>
              Long Break <br /> Duration (Mins)
            </p>
          </div>
        </div>
        <Button title='Set Timer' clicked={handleSubmit} />
      </form>
    </div>
  );
};

export default SetPomodoro;
