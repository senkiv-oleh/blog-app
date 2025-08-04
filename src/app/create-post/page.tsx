import CreatePostForm from '@/components/CreatePostForm'
import Link from 'next/link'

export default function CreatePage () {
  return (
    <main className='max-w-3xl mx-auto py-8 w-[90%]'>
      <Link
        href='/'
        className='mt-4 inline-flex items-center px-4 py-2 bg-purple-100 border-purple-600 border-2 rounded-md text-sm font-medium text-purple-600 hover:bg-gray-100'
      >
        ← Go Back
      </Link>
      <h1 className='text-3xl font-bold mb-6 text-gray-800 text-center'>
        Create a New Post
      </h1>
      <CreatePostForm />
    </main>
  )
}
