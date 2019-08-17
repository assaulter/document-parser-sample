<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">3.htmlに戻した結果</h4>
      <div class="card-text">
        <textarea class="form-control" v-model="html" :rows="rows"></textarea>
      </div>
      <div class="card-text mt-4">
        <button type="button" class="btn btn-primary copy" :data-clipboard-text="html">クリップボードにコピー</button>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

const clipboard = new Clipboard('.copy');
clipboard.on('success', function(e) {
  alert('コピーしました');
  e.clearSelection();
});

export default {
  name: 'OutputHtml',
  props: ['outputHtml'],
  computed: {
    html: {
      get() {
        return this.outputHtml
      },
      set(val) {
        // do nothing.
      }
    },
    rows() {
      const num = this.outputHtml.split('\n').length;
      return (num > 4) ? num : 4;
    },
  }
}
</script>
