import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
interface PostQuery  {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
       params: {
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize,
      },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    keepPreviousData: true,
  });
}

export default usePosts