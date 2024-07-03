import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constans";
import todoService, { Todo } from "../services/todoService";







const useTodos = () => {
      return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoService.getAll,
        staleTime: 1000 * 10, // Cache for 10 seconds
      });
}

export default useTodos