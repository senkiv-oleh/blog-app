import { Timestamp } from 'firebase/firestore'


export interface Comment {
  id: string
  content: string
  author?: string
  createdAt: Timestamp | null | string
}
