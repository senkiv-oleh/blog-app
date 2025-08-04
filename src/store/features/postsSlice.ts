import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '@/utils/firebase'
import { Post, PostsState } from '@/types/post'
import {
  addDoc,
  collection,
  getDoc,
  doc,
  serverTimestamp,
  updateDoc,
  deleteDoc
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

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, data }: { id: string; data: Partial<Post> }) => {
    const ref = doc(db, 'posts', id)
    await updateDoc(ref, { ...data, updatedAt: serverTimestamp() })

    return {
      id,
      data,
      updatedAt: new Date().toISOString()
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: string) => {
    const ref = doc(db, 'posts', id)
    await deleteDoc(ref)

    console.log(`Post with ID ${id} deleted successfully`)
    return id
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, data } = action.payload
        const index = state.items.findIndex(p => p.id === id)
        if (index !== -1) {
          state.items[index] = { ...state.items[index], ...data }
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload)
      })
  }
})

export default postsSlice.reducer
