import { format } from 'date-fns'
import { Timestamp } from 'firebase/firestore'

  export const formatDate = (date: Timestamp | string | null | undefined) => {
    if (!date) return null
    const d = typeof date === 'string' ? new Date(date) : date.toString()
    return format(d, 'dd MMM yyyy HH:mm')
  }


  export const formatCreateUpdateDate = (date: Timestamp | null | undefined): Date | null => {
    return date ? date.toDate() : null
  }