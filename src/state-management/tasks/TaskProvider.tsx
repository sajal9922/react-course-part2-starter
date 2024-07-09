import { ReactNode, useReducer } from 'react';

import TaskContext from './taskContext';

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD';
  task: Task;
}
interface DeleteTask {
  type: 'DELETE';
  id: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReduser = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.task, ...tasks];
    case 'DELETE':
      return tasks.filter((t) => t.id !== action.id);
    default:
      return tasks;
  }
};

interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReduser, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
