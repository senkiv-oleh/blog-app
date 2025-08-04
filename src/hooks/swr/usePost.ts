import useSWR from 'swr'
import { Post } from '@/types/post'
import { fetchPostById } from '@/utils/fetchers'

export const usePost = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR<Post>(
    id ? `post-${id}` : null,
    () => fetchPostById(id)
  )

  return {
    post: data,
    isLoading,
    isError: error,
    mutate
  }
}
