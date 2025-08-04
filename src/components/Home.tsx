import PostList from './PostList'
import Link from 'next/link'

export default function HomePage () {
  return (
    <>
      <div className='flex justify-between items-center mb-6 w-full'>
        <h1 className='text-5xl font-bold'>Blog App</h1>
        <Link
          href='/'
          className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
        >
          + Add new Post
        </Link>
      </div>
      <PostList />
    </>
  )
}
