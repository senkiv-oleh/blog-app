import { Timestamp } from 'firebase/firestore'

export interface Post {
  id: string
  title: string
  content: string
  createdAt: Timestamp | null | string
  updatedAt?: Timestamp | null | string
  author: string
}


export interface PostsState {
  items: Post[]
  loading: boolean
}