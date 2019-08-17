<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">2.テキスト抽出結果を編集する</h4>
      <div class="card-text">
        <textarea class="form-control"
          :rows="rows" v-model="text">
        </textarea>
        <small class="text-muted">改行位置を変更すると戻した際にずれます...</small>
      </div>
      <div class="card-text mt-4">
        <button v-bind:disabled="isButtonDisabled" @click="emitTextList" type="button" class="btn btn-primary">htmlに戻す</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutputTextList',
  props: {
    textList: Array,
  },
  computed: {
    text: {
      get() {
        return this.textList.join('\n');
      },
      set(val) {
        this.$emit('emit-change-text-list', val.split('\n'));
      },
    },
    rows() {
      const num = this.text.split('\n');
      return (num > 4) ? num : 4;
    },
    isButtonDisabled() {
      return this.text.length <= 0;
    },
  },
  methods: {
    emitTextList() {
      const textList = this.text.split('\n');
      this.$emit('emit-text-list', textList);
    },
  },
};
</script>
