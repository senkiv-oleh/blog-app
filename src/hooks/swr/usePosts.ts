import useSWR from 'swr'
import { fetchPosts } from '@/utils/fetchers'
import { Post } from '@/types/post'

export const usePosts = () => {
  const { data, error, isLoading, mutate } = useSWR<Post[]>('posts', fetchPosts)

  return {
    posts: data,
    isLoading,
    isError: !!error,
    mutate
  }
}
