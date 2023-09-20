<template>
  <div class="vacancy-form">
    <h3>{{ vacancy ? "Edit Shift" : "Add Shift" }}</h3>
    <a-form
      layout="vertical"
      :model="formData"
      v-bind="formItemLayout"
      @finish="saveVacancy"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="Title">
        <a-input v-model:value="formData.title" placeholder="input placeholder" required/>
      </a-form-item>
      <a-form-item label="Description">
        <a-input
          v-model:value="formData.description"
          placeholder="input placeholder"
          required
        />
      </a-form-item>
      <a-form-item label="Date">
        <a-range-picker v-model:value="formData.dates" :format="dateFormat" />
      </a-form-item>
      <div v-for="(dateEntry, index) in formData.dates" :key="index" class="date-entry">
        
        {{ dayjs(formData.dates[index]).format('DD-MM-YYYY') }}
        <hr/>
      <a-form-item label="Start Time">
        <a-time-picker :id="'startTime' + index" v-model:value="dateEntry.startTime" format="hh:mm" value-format="hh:mm"  />
      </a-form-item>

      <a-form-item label="End Time">
        <a-time-picker :id="'endTime' + index" v-model:value="dateEntry.endTime" format="hh:mm" value-format="hh:mm"/>
      </a-form-item>

      <a-form-item label="Price">
        <a-input type="number" step="any" :id="'price' + index" v-model:value="dateEntry.price"  required/>
      </a-form-item>

      <a-form-item label="Type">
        <a-select :id="'type' + index" v-model:value="dateEntry.type">
          <a-select-option value="consultation">Consultation</a-select-option>
          <a-select-option value="telephone">Telephone</a-select-option>
          <a-select-option value="Ambulance">Ambulance</a-select-option>
        </a-select>
      </a-form-item>
      </div>

      <a-form-item>
        <a-button style="margin-right: 10px">Delete</a-button>
        <a-button type="primary" html-type="submit">Save</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import dayjs from 'dayjs'
export default {
  props: {
    vacancy: Object,
  },
  setup(props) {
    const store  = useStore()
    const dateFormat = 'DD-MM-YYYY'
    const formData = reactive({
        title: '',
        description: '',
        dates: [],
    })
    const saveVacancy = () => {
      if (isValidForm()) {
        const result = {
          title: formData.title,
          description: formData.description,
          date: []
        };
        formData.dates.map((item,index)=>{
          result.date.push({
            date:dayjs(formData.dates[index]),
            type:item?.type,
            price:parseFloat(item?.price),
            startTime:item?.startTime,
            endTime:item?.endTime,
          })
         
        })
      if (props.vacancy) {
        store.dispatch('save', props.vacancy.id, result);
      } else {
        store.dispatch('addVacancy', result);
      }      
    }
    }

    const isValidForm = () => {
      return true
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }
    return {
      dayjs,
      formData,
      saveVacancy,
      onFinishFailed
    }
  }
};
</script>

<style scoped>
.vacancy-form {
  padding: 10px;
  margin: 10px;
}
</style>
