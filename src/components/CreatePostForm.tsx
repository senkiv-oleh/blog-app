'use client'

const CreatePostForm = () => {
  return (
    <form
      onSubmit={() => {}}
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
          placeholder='Enter post title'
          className='w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Content
        </label>
        <textarea
          placeholder='Write your content here...'
          rows={6}
          className={`w-full p-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-purple-500`}
        />
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
