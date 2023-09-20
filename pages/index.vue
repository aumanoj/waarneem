<template>
    <div class="overview">
      <h2>Filter</h2>
      <a-row>
        <!-- Filter slider -->
        <p>Filter on price {{ filterPrice }} - {{ maxPrice }}</p>
        <input type="range" min="0" :max="maxPrice" v-model="filterPrice" />
      </a-row>
      <a-row>
        <a-col :span="12">
          <h3>Shifts</h3>
        </a-col>
        <a-col :span="12">
          <AddShift />
        </a-col>
      </a-row>
      <div class="vacancy-list">
        <vacancy-card v-for="(vacancy, index) in filteredVacancies" :key="index" :vacancy="vacancy"></vacancy-card>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import AddShift from '../components/AddShift.vue'
  import { useStore } from 'vuex'
  export default {
    components:{
        AddShift
    },

    setup(){
      const store  = useStore()
      const filterPrice = ref(0)
      const vacancies = computed(()=>{
        return store.getters.getVacancies
      })
      const  maxPrice = computed(()=> {
        // Calculate the maximum price from vacancies
        let price = null
        if(vacancies.value.length>0){
          price = Math.max(...vacancies.value.map((vacancy) => vacancy?.map((item)=>parseInt(item.price))));
        }
        return price
      })

      const filteredVacancies = computed(()=> {
        // Filter vacancies based on price range
        let price = null
        if(vacancies.value.length>0){
          price = vacancies.value.filter((vacancy) => parseInt(vacancy.price) <= filterPrice.value);
          // price = vacancies.value.filter((vacancy) => vacancy.date.filter((item)=>item.price) <= filterPrice.value);
        }
        return price
      })
      return{
        filterPrice,
        vacancies,
        maxPrice,
        filteredVacancies
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  