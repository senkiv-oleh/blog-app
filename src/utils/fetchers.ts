import { db } from '@/utils/firebase'
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore'
import { Post } from '@/types/post'
import { formatCreateUpdateDate } from '@/utils/formatDate'
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

export const fetchPostById = async (id: string): Promise<Post> => {
  const docRef = doc(db, 'posts', id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    throw new Error('Post not found')
  }

  const data = docSnap.data()
  const createdAt = formatCreateUpdateDate(data.createdAt)
  const updatedAt = formatCreateUpdateDate(data.updatedAt)
  return {
    id: docSnap.id,
    ...data,
    createdAt,
    updatedAt
  } as Post
}
