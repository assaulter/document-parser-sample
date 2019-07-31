<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">HtmlInputForm</h4>
      <div class="card-text">
        <textarea class="form-control" v-model="message" :rows="rows"></textarea>
      </div>
      <p class="card-text">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtmlInputForm',
  data() {
    return {
      message: '',
    };
  },
  computed: {
    rows() {
      const num = this.message.split('\n').length;
      return (num > 4) ? num : 4;
    },
  },
};
</script>
