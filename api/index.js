import axios from '@/api/axios'

export const getLists = async () => {
  const { data } = await axios.get()
  return data
}
