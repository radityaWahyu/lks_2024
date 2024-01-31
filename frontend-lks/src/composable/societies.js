import http from '../configs/axiosConfig'
import { ref } from 'vue'

export default function useSocieties() {
  const url = ref('/society')
  const societies = ref([])
  const society = ref([])
  const errors = ref([])

  // mengambil data semua user pada database
  const getSocieties = async () => {
    const response = await http.get(url.value)

    console.log(response.data)
    societies.value = response.data.data
  }

  const createSociety = async (data) => {
    errors.value = []
    try {
      const response = await http.post(url.value, data)
      errors.value = null
      console.log(response)
    } catch (error) {
      errors.value = error.response.data.errors
    }
  }

  const getSociety = async (id) => {
    const response = await http.get(`${url.value}/${id}`)
    society.value = response.data.data
    console.log(response.data)
  }

  return {
    errors,
    society,
    societies,
    getSociety,
    getSocieties,
    createSociety
  }
}
