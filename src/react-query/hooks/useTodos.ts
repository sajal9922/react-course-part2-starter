import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}


const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data);

      return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
        staleTime: 1000 * 10, // Cache for 10 seconds
      });
}

export default useTodos