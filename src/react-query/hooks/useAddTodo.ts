import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";
import { CACHE_KEY_TODOS } from "../constans";





interface addtodoContexr {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd : () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, addtodoContexr>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({
      //   queryKey: ['todos'],
      // });
      // update the cache directly
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd();
      return { previousTodos };
    },
    onSuccess: (saveTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? saveTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
}

export default useAddTodo;