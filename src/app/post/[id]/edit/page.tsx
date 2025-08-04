import Link from 'next/link'
import PostForm from '@/components/PostForm'
import { Post } from '@/types/post'
import { fetchPostById } from '@/utils/fetchers'

export default async function EditPage ({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let post: Post | null = null

  try {
    post = await fetchPostById(id)
  } catch (error) {
    console.error('Failed to fetch post:', error)
  }

  if (!post) {
    return <p>Post not found or failed to load</p>
  }

  return (
    <>
      <Link
        href='/'
        className='mt-4 inline-flex items-center px-4 py-2 bg-purple-100 border-purple-600 border-2 rounded-md text-sm font-medium text-purple-600 hover:bg-gray-100'
      >
        ← Go Back
      </Link>
      <PostForm post={post} />
    </>
  )
}
