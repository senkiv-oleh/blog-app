'use client'

import { useRouter } from 'next/navigation'
import { usePosts } from '@/hooks/swr/usePosts'
import PostItem from './PostItem'

export default function PostList () {
  const router = useRouter()

  const { posts, isLoading } = usePosts()

  const handleReadMore = (id: string) => {
    router.push(`/post/${id}`)
  }

  const handleEdit = (id: string) => {
    console.log('Edit post with id:', id)
  }

  const handleDelete = (id: string) => {
    console.log('Delete post with id:', id)
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
