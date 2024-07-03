import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constans";


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
        queryKey: CACHE_KEY_TODOS,
        queryFn: fetchTodos,
        staleTime: 1000 * 10, // Cache for 10 seconds
      });
}

export default useTodos