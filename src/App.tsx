import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import LoginPage from './routing/LoginPage';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import taskReduser from './state-management/redusers/taskReduser';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TaskContext from './state-management/contexts/taskContext';

function App() {
  const [tasks, dispatch] = useReducer(taskReduser, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TaskContext.Provider>
  );
}

export default App;
