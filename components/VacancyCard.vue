<template>
    <div class="vacancy-card">
      <h3>Title {{ vacancy.title }}</h3>
      <p> Description {{ vacancy.description }}</p>
      <p>Dates </p>
      <ul>
        <li v-for="date,index in vacancy.date" :key="date.id">
          {{ dayjs(date[index]).format(format) }},
          {{ date.startTime }},
          {{ date.endTime }},
          {{ date.price }},
          {{ date.type }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import dayjs from 'dayjs'
  export default {
    props: {
      vacancy: Object,
    },
    setup(){
      const format = 'DD-MM-YYYY'
      return{
        format,
        dayjs
      }
    }
  };
  </script>
  
  <style scoped>
  .vacancy-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  