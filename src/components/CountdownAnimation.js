import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useTimerContext } from '../context/context';

const CountdownAnimation = ({
  key = 0,
  timer = 0,
  animate = false,
  children,
}) => {
  const { stopTimer } = useTimerContext();

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ['#fe6f6b', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor='#151932'
      onComplete={stopTimer}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
