<template>
  <div id="app">
    <h1>Sample</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <HtmlInputForm @emit-message="onEmitMessage"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <OutputTextList :textList="outputTextList" @emit-text-list="onEmitTextList"></OutputTextList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtmlInputForm from './components/HtmlInputForm.vue';
import OutputTextList from './components/OutputTextList.vue';

var textList = [];

// private method
function parse(inputHtml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(inputHtml, 'text/html');
  // bodyより下のNodeList
  const bodyChildren = doc.getElementsByTagName('body')[0].childNodes;
  updateTextList(bodyChildren);

  return textList.map(text => text.nodeValue);
}

// nodeListを受け取って再帰する
function updateTextList(nodeList) {
  nodeList.forEach(node => {
    // guard条件
    // 1. node.nodeType == TEXT_NODE の場合
    if(node.nodeType == 3) {
      textList.push(node);
      return;
    }
    // 2. 子がいなかったらreturn
    const childNodes = node.childNodes;
    if(childNodes.length <= 0) {
      return;
    }
    updateTextList(childNodes);
  });
}

export default {
  name: 'app',
  data() {
    return {
      inputHtml: '',
      outputTextList: [],
    };
  },
  components: {
    HtmlInputForm,
    OutputTextList
  },
  methods: {
    onEmitMessage(arg) {
      this.inputHtml = arg;
      this.outputTextList = parse(arg);
    },
    onEmitTextList(textList) {
      console.log(textList);
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
