import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '@/utils/firebase'
import { Post, PostsState } from '@/types/post'
import {
  addDoc,
  collection,
  getDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore'

const initialState: PostsState = {
  items: [],
  loading: false
}

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (data: { title: string; content: string; author: string }) => {
    const docRef = await addDoc(collection(db, 'posts'), {
      ...data,
      createdAt: serverTimestamp()
    })

    const snapshot = await getDoc(doc(db, 'posts', docRef.id))
    if (snapshot.exists()) {
      const data = snapshot.data() as Omit<Post, 'id'>
      return {
        id: snapshot.id,
        ...data
      }
    }

    return { id: docRef.id, ...data, createdAt: new Date().toISOString() }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.items.unshift(action.payload)
    })
  }
})

export default postsSlice.reducer
