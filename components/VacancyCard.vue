<template>
    <div class="vacancy-card">
    <div class="title">
      <h3>Title: {{ vacancy.title }}</h3>
      <p> Description: {{ vacancy.description }}</p>
      <b>Dates: </b>
    </div>
    <a-row v-for="date,index in vacancy.date" :key="date.id" class="row">
      <a-col :span="4">{{ dayjs(date[index]).format(format) }}</a-col>
      <a-col :span="2">{{ date.startTime }}</a-col>
      <a-col :span="2">{{ date.endTime }}</a-col>
      <a-col :span="2">{{ date.price }}</a-col>
      <a-col :span="2">{{ date.type }}</a-col>
    </a-row>
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
  .row{
    background-color: gray;
    padding: 10px;
    margin: 10px;
    color: #fff;
  }
  .title{
    padding-left: 10px;
  }
  </style>
  