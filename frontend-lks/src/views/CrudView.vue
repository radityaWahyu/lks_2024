<template>
  <div>ini halaman CRUD</div>
  <div>
    <button type="button" class="btn btn-primary" @click="addSociety">Tambah Society</button>
  </div>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Birth Date</th>
          <th scope="col">Gender</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in societies" :key="row.id_society">
          <th scope="row">{{ row.id_society }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.born_date }}</td>
          <td v-if="row.gender === 'male'">L</td>
          <td v-else>P</td>
          <td>
            <router-link
              :to="{ name: 'crud-edit', params: { id: row.id_society } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useSocieties from '../composable/societies'

const router = useRouter()
const { societies, getSocieties } = useSocieties()

const addSociety = () => {
  router.push({ name: 'crud-add' })
}

onMounted(() => {
  getSocieties()
})
</script>
