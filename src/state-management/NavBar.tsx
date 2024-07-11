import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import TaskContext from './tasks/taskContext';
import useCounterStor from './counter/store';

const NavBar = () => {
  const counter = useCounterStor((s) => s.counter);
  const { tasks } = useContext(TaskContext);
  console.log('Rendering NavBar');

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
