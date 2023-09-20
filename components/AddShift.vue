<template>
    <div class="add-shift">
      <a-button type="primary"  @click="saveShift">{{ selectedVacancy ? 'Update Shift' : 'ADD SHIFT' }}</a-button>
      <a-drawer
      title="Create/Edit"
      :width="720"
      :open="open"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
      @close="onClose"
      >
        <vacancy-form :vacancy="selectedVacancy"></vacancy-form>
      </a-drawer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedVacancy: null, 
        open:false
      };
    },
    methods: {
      saveShift() {
        if (this.selectedVacancy) {
          // update
        } else {
          // create
        }
        this.open = true
      },
      onClose(){
          this.open = false
      }
    },
  }
  </script>
  
  <style scoped>
  </style>
  