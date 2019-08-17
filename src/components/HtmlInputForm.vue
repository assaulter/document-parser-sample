<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">1.htmlを貼り付ける</h4>
      <div class="card-text">
        <textarea class="form-control" v-model="message" :rows="4"></textarea>
      </div>
      <div class="card-text mt-4">
        <button v-bind:disabled="isButtonDisabled" @click="emitMessage" type="button" class="btn btn-primary">テキストを抽出</button>
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
  computed: {
    isButtonDisabled() {
      return this.message.length <= 0;
    },
  },
  methods: {
    emitMessage() {
      // 改行は除外
      const msg = this.message.replace('\n', '');
      this.$emit('emit-message', msg);
    },
  },
};
</script>
