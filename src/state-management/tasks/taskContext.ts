import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";


interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;
