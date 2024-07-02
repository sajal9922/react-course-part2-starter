import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params:{
          userId
        }
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId ? ['users',userId,'posts'] : ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
}

export default usePosts