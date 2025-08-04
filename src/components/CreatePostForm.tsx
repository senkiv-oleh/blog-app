'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema, PostFormData } from '@/utils/validationPost'
import { useAppDispatch } from '@/hooks/redux'
import { addPost } from '@/store/features/postsSlice'
import { useRouter } from 'next/navigation'

const CreatePostForm = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema)
  })

  const onSubmit = async (data: PostFormData) => {
    console.log('Form submitted:', data)
    await dispatch(addPost({ ...data, author: 'user_1' }))
    reset()
    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto mt-8 space-y-6'
    >
      <h2 className='text-2xl font-bold text-gray-800 text-center'>
        Fill out the form below to create your post.
      </h2>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Title
        </label>
        <input
          {...register('title')}
          placeholder='Enter post title'
          className={`w-full p-3 rounded-lg border ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        {errors.title && (
          <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Content
        </label>
        <textarea
          {...register('content')}
          placeholder='Write your content here...'
          rows={6}
          className={`w-full p-3 rounded-lg border ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
        {errors.content && (
          <p className='text-red-500 text-sm mt-1'>{errors.content.message}</p>
        )}
      </div>

      <button
        type='submit'
        className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all'
      >
        Create Post
      </button>
    </form>
  )
}

export default CreatePostForm
