<template>
  <div id="app">
    <h1>Sample</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <HtmlInputForm @emit-message="onEmitMessage"/>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <OutputTextList 
            :textList="inputTextList" 
            @emit-text-list="onEmitTextList"
            @emit-change-text-list="onChangeTextList"
          ></OutputTextList>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <OutputHtml :outputHtml="outputHtml"></OutputHtml>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtmlInputForm from './components/HtmlInputForm.vue';
import OutputTextList from './components/OutputTextList.vue';
import OutputHtml from './components/OutputHtml.vue';

var textList = [];

// private method
function parse(inputHtml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(inputHtml, 'text/html');
  // bodyより下のNodeList
  return doc.getElementsByTagName('body')[0].childNodes;
}

function isEmpty(data) {
  return !(/[^\t\n\r ]/.test(data));
}

// nodeListを受け取って再帰する
function updateTextList(nodeList) {
  nodeList.forEach(node => {
    // guard条件
    // 1. node.nodeType == TEXT_NODE の場合
    if(node.nodeType == 3) {
      const value = node.nodeValue;
      // ホワイトスペースノードは除外
      if (isEmpty(value)) { return; }
      textList.push(node.nodeValue);
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

// nodeListを受け取り再帰しつつ、outputTextListを見ながら復旧
function updateNodeList(nodeList, textList) {
  nodeList.forEach(node => {
    // guard条件
    // 1. node.nodeType == TEXT_NODE の場合
    if(node.nodeType == 3) {
      // ホワイトスペースノードは除外
      if (isEmpty(node.nodeValue)) { return; }
      const text = textList.shift();
      node.nodeValue = text;
      return;
    }
    // 2. 子がいなかったらreturn
    const childNodes = node.childNodes;
    if(childNodes.length <= 0) {
      return;
    }
    updateNodeList(childNodes, textList);
  });
}

export default {
  name: 'app',
  data() {
    return {
      inputHtml: '',
      inputTextList: [],
      outputHtml: '',
    };
  },
  components: {
    HtmlInputForm,
    OutputTextList,
    OutputHtml
  },
  methods: {
    onEmitMessage(val) {
      // save to inputHtml
      this.inputHtml = val;

      updateTextList(parse(val));
      this.inputTextList = textList;
    },
    onChangeTextList(val) {
      this.inputTextList = val;
    },
    onEmitTextList(val) {
      // 保存しておいたinputHtmlを使う
      const nodeList = parse(this.inputHtml);

      updateNodeList(nodeList, val);
      const doc = document.createElement('div');
      nodeList.forEach(node => {
        doc.appendChild(node);
      })
      this.outputHtml = doc.innerHTML;
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
