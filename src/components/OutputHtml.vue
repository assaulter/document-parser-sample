<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">3.htmlに戻した結果</h4>
      <div class="card-text">
        <textarea disabled class="form-control" v-model="html" :rows="rows"></textarea>
      </div>
      <div class="card-text mt-4">
        <button
          type="button"
          class="btn btn-primary copy"
          :data-clipboard-text="html"
        >クリップボードにコピー</button>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

const clipboard = new Clipboard('.copy');
clipboard.on('success', (e) => {
  alert('コピーしました');
  e.clearSelection();
});

export default {
  name: 'OutputHtml',
  props: {
    outputHtml: String,
  },
  computed: {
    html: {
      get() {
        return this.outputHtml;
      },
      set() {
        // do nothing.
      },
    },
    rows() {
      const num = this.outputHtml.split('\n').length;
      return (num > 4) ? num : 4;
    },
  },
};
</script>
