<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Htmlを貼り付ける</h4>
      <div class="card-text">
        <textarea class="form-control" v-model="message" :rows="rows"></textarea>
      </div>
      <div class="card-text mt-4">
        <button @click="emitMessage" type="button" class="btn btn-primary">submit</button>
      </div>
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
  methods: {
    emitMessage() {
      this.$emit('emit-message', this.message);
    }
  },
  computed: {
    rows() {
      const num = this.message.split('\n').length;
      return (num > 4) ? num : 4;
    },
  },
};
</script>
