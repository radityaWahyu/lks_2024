<template>
  <div class="my-3 fs-3">Tambah Society</div>
  <div class="mb-3">
    <label class="form-label">Card Number</label>
    <input type="text" class="form-control" v-model="form.id_card_number" />
    <div class="form-text text-danger" v-if="errors !== null && errors.id_card_number">
      {{ errors.id_card_number[0] }}
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control" v-model="form.password" />
    <div class="form-text text-danger" v-if="errors.password">
      {{ errors.password[0] }}
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" v-model="form.name" />
    <div class="form-text text-danger" v-if="errors.id_card_number">
      {{ errors.name[0] }}
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Born Date</label>
    <input type="date" class="form-control" v-model="form.born_date" />
    <div class="form-text text-danger" v-if="errors.bord_date">
      {{ errors.born_date[0] }}
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Gender</label>
    <select class="form-select" aria-label="Default select example" v-model="form.gender">
      <option value="">Open this select menu</option>
      <option :value="row" v-for="row in genders" v-bind:key="row.index">{{ row }}</option>
    </select>
    <div class="form-text text-danger" v-if="errors.gender">
      {{ errors.gender[0] }}
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Address</label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      v-model="form.address"
    ></textarea>
    <div class="form-text text-danger" v-if="errors.address">
      {{ errors.address[0] }}
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Regional Id</label>
    <select class="form-select" aria-label="Default select example" v-model="form.regional_id">
      <option value="">Open this select menu</option>
      <option :value="row.id" v-for="row in regionals" v-bind:key="row.index">
        {{ row.province }} - {{ row.district }}
      </option>
    </select>
    <div class="form-text text-danger" v-if="errors.regional_id">
      {{ errors.regional_id[0] }}
    </div>
  </div>
  <div class="mb-3">
    <input type="button" class="btn mr-1" value="Batalkan" @click="batal" />
    <input type="button" class="btn btn-primary" value="Simpan Data" @click="simpan" />
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useSocieties from '@/composable/societies'
import useRegionals from '@/composable/regionals'

const genders = ref(['male', 'female'])
const form = reactive({
  id_card_number: '',
  name: '',
  password: '',
  born_date: '',
  gender: '',
  address: '',
  regional_id: ''
})

const router = useRouter()
const route = useRoute()
const { errors, society, getSociety } = useSocieties()
const { regionals, getRegionalLists } = useRegionals()

watch(
  () => route.params.id,
  async (newValue) => {
    await getRegionalLists()
    await getSociety(newValue)
    form.id_card_number = society.value.id_card_number
    form.name = society.value.name
    form.born_date = society.value.born_date
    form.gender = society.value.gender
    form.address = society.value.address
    form.regional_id = society.value.regional_id
  },
  { immediate: true }
)

const batal = () => {
  router.push({ name: 'crud' })
}

const simpan = async () => {}
</script>
