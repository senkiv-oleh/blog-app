'use client'

import { useRouter } from 'next/navigation'
import PostItem from './PostItem'
import { usePosts } from '@/hooks/swr/usePosts'
import { useAppDispatch } from '@/hooks/redux'
import { deletePost } from '@/store/features/postsSlice'

export default function PostList () {
  const dispatch = useAppDispatch()

  const router = useRouter()

  const { posts, isLoading, mutate } = usePosts()

  const handleReadMore = (id: string) => {
    router.push(`/post/${id}`)
  }

  const handleEdit = (id: string) => {
    router.push(`/post/${id}/edit`)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      dispatch(deletePost(id))
    }
    mutate()
  }

  if (isLoading)
    return (
      <div className='flex justify-center items-center py-16 bg-gradient-to-br from-purple-50 via-white to-green-50 rounded-xl'>
        <div className='w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
      </div>
    )

  return (
    <div className='py-8 px-4 flex-1 flex-col items-center'>
      <h1 className='text-3xl font-extrabold text-center mb-8 text-gray-800'>
        Latest <span className='text-purple-600'>Blog Posts</span>
      </h1>

      <ul className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {posts?.length === 0 && (
          <p className='col-span-full text-center text-gray-500 text-lg'>
            No posts yet
          </p>
        )}

        {posts?.map(post => (
          <PostItem
            key={post.id}
            post={post}
            handleReadMore={handleReadMore}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}
