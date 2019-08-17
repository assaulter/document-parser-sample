<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Text抽出結果</h4>
      <div class="card-text">
        <textarea class="form-control" 
          :rows="rows" v-model="text">
        </textarea>
      </div>
      <div class="card-text mt-4">
        <button @click="emitTextList" type="button" class="btn btn-primary">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutputTextList',
  props: ['textList'],
  data() {
    return {
      inputText: ''
    }
  },
  computed: {
    text: {
      get() {
        return this.textList.join('\n');
      },
      set(val) {
        this.inputText = val;
      }
    },
    rows() {
      const num = this.textList.length;
      return (num > 4) ? num : 4;
    },
  },
  methods: {
    emitTextList() {
      const textList = this.inputText.split('\n');
      this.$emit('emit-text-list', textList);
    }
  }
}
</script>
