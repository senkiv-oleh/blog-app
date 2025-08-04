import { db } from '@/utils/firebase'
import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { Post } from '@/types/post'

export const fetchPosts = async (): Promise<Post[]> => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)

  return snapshot.docs.map(docSnap => {
    const data = docSnap.data() as Omit<Post, 'id'>

    return {
      id: docSnap.id,
      ...data
    }
  })
}

