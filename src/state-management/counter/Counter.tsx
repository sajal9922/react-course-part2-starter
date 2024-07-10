import { useReducer } from 'react';

import useCounterStor from './store';

const Counter = () => {
  const { counter, increament, reset } = useCounterStor();

  return (
    <div>
      Counter ({counter})
      <button onClick={() => increament()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
