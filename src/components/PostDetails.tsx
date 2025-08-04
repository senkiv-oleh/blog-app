'use client'

import Link from 'next/link'
import { usePost } from '@/hooks/swr/usePost'
import { formatDate } from '@/utils/formatDate'

export default function PostDetails ({ id }: { id: string }) {
  const { post, isLoading } = usePost(id)

  if (isLoading)
    return (
      <div className='flex justify-center items-center py-16 bg-gradient-to-br from-purple-50 via-white to-green-50 rounded-xl'>
        <div className='w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
      </div>
    )

  if (!post)
    return (
      <div className=' text-center text-gray-500 text-lg mt-10'>
        Post not found
      </div>
    )

  return (
    <>
      <Link
        href='/'
        className='mt-4 inline-flex items-center px-4 py-2 bg-purple-100 border-purple-600 border-2 rounded-md text-sm font-medium text-purple-600 hover:bg-gray-100'
      >
        ← Go Back
      </Link>
      <div className='mt-10 p-px rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg'>
        <div className='bg-white rounded-xl p-8 space-y-6'>
          <h1 className='text-4xl font-bold text-gray-800'>{post.title}</h1>

          <div className='text-sm text-gray-500'>
            <p>
              By{' '}
              <span className='font-medium text-gray-700'>
                {post.author ? post.author : 'Anonymous'}
              </span>
            </p>
            <p>
              Created: {formatDate(post.createdAt)}
              {post.updatedAt && (
                <>
                  {' · '}
                  Updated: {formatDate(post.updatedAt)}
                </>
              )}
            </p>
          </div>

          <p className='text-lg leading-relaxed text-gray-700'>
            {post.content}
          </p>

          <hr className='border-gray-200 my-4' />

          <div className='mt-12'>
            <h2 className='text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2'>
              Comments
              <span className='text-sm bg-purple-100 text-purple-600 font-medium px-3 py-1 rounded-full'>
                Share your thoughts
              </span>
            </h2>

            <div className='bg-white space-y-6'>
              {/* <CommentList /> */}

              <hr className='border-t border-gray-200' />

              <div className='pt-2'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                  Add a comment
                </h3>
                {/* <CommentForm /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
