import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constans";
import ApiClient from "../services/apiClient";

const apiClient= new ApiClient<Todo>('/todos');


export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}


const useTodos = () => {


      return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll,
        staleTime: 1000 * 10, // Cache for 10 seconds
      });
}

export default useTodos