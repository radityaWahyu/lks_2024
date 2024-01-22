<template>
  <div>
    <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
    <h2>status form {{ form.open }}</h2>
    <h2>judul form {{ form.title }}</h2>
    <h2 v-if="form.nama.length > 0">Nama saya adalah {{ form.nama }}</h2>

    <h3>increment {{ increment }}</h3>

    <input type="text" v-model="form.title" />

    <button @click="tambahIncrement">tambah increment</button>
    <button @click="kurangIncrement">kurang increment</button>

    <button @click="showModal(true)">Tampilkan</button>
    <button @click="showModal(false)">Tutup modal</button>
    <modal-dialog :show="form.open" @closeModal="tutupModal" @simpan="tampilNama" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import ModalDialog from '../components/TheModalDialog.vue'

const form = reactive({
  open: false,
  title: 'ini adalah form',
  nama: ''
})

const increment = ref(0)

// function tambahIncrement() {
//   return increment.value
// }

const tambahIncrement = () => increment.value++
const kurangIncrement = () => increment.value--

const showModal = (data) => (form.open = data)
const tutupModal = (data) => {
  console.log(data)
  form.open = data
}
const tampilNama = (data) => (form.nama = data)
</script>
