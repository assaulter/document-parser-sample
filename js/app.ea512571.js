(function(t){function e(e){for(var s,r,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)r=o[d],a[r]&&m.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("5f5b"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Sample")]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("HtmlInputForm",{on:{"emit-message":t.onEmitMessage}})],1)]),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col"},[n("OutputTextList",{attrs:{textList:t.inputTextList},on:{"emit-text-list":t.onEmitTextList,"emit-change-text-list":t.onChangeTextList}})],1)]),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col"},[n("OutputHtml",{attrs:{outputHtml:t.outputHtml}})],1)])])])},r=[],o=(n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("1.htmlを貼り付ける")]),n("div",{staticClass:"card-text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{rows:4},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),n("div",{staticClass:"card-text mt-4"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isButtonDisabled,type:"button"},on:{click:t.emitMessage}},[t._v("テキストを抽出")])])])])}),l=[],u=(n("a481"),{name:"HtmlInputForm",data:function(){return{message:""}},computed:{isButtonDisabled:function(){return this.message.length<=0}},methods:{emitMessage:function(){var t=this.message.replace("\n","");this.$emit("emit-message",t)}}}),c=u,d=n("2877"),m=Object(d["a"])(c,o,l,!1,null,null,null),p=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("2.テキスト抽出結果")]),n("div",{staticClass:"card-text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:t.rows},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("small",{staticClass:"text-muted"},[t._v("改行位置を修正すると戻した際にずれます...")])]),n("div",{staticClass:"card-text mt-4"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isButtonDisabled,type:"button"},on:{click:t.emitTextList}},[t._v("htmlに戻す")])])])])},v=[],h=(n("28a5"),{name:"OutputTextList",props:{textList:Array},computed:{text:{get:function(){return this.textList.join("\n")},set:function(t){this.$emit("emit-change-text-list",t.split("\n"))}},rows:function(){var t=this.text.split("\n");return t>4?t:4},isButtonDisabled:function(){return this.text.length<=0}},methods:{emitTextList:function(){var t=this.text.split("\n");this.$emit("emit-text-list",t)}}}),x=h,g=Object(d["a"])(x,f,v,!1,null,null,null),b=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v("3.htmlに戻した結果")]),n("div",{staticClass:"card-text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.html,expression:"html"}],staticClass:"form-control",attrs:{disabled:"",rows:t.rows},domProps:{value:t.html},on:{input:function(e){e.target.composing||(t.html=e.target.value)}}})]),n("div",{staticClass:"card-text mt-4"},[n("button",{staticClass:"btn btn-primary copy",attrs:{type:"button","data-clipboard-text":t.html}},[t._v("クリップボードにコピー")])])])])},y=[],w=n("b311"),_=n.n(w),O=new _.a(".copy");O.on("success",function(t){alert("コピーしました"),t.clearSelection()});var T={name:"OutputHtml",props:{outputHtml:String},computed:{html:{get:function(){return this.outputHtml},set:function(t){}},rows:function(){var t=this.outputHtml.split("\n").length;return t>4?t:4}}},H=T,L=Object(d["a"])(H,C,y,!1,null,null,null),j=L.exports,E=[];function M(t){var e=new DOMParser,n=e.parseFromString(t,"text/html");return n.getElementsByTagName("body")[0].childNodes}function P(t){return!/[^\t\n\r ]/.test(t)}function S(t){t.forEach(function(t){if(3!=t.nodeType){var e=t.childNodes;e.length<=0||S(e)}else{var n=t.nodeValue;if(P(n))return;E.push(t.nodeValue)}})}function $(t,e){t.forEach(function(t){if(3!=t.nodeType){var n=t.childNodes;n.length<=0||$(n,e)}else{if(P(t.nodeValue))return;var s=e.shift();t.nodeValue=s}})}var N={name:"app",data:function(){return{inputHtml:"",inputTextList:[],outputHtml:""}},components:{HtmlInputForm:p,OutputTextList:b,OutputHtml:j},methods:{onEmitMessage:function(t){this.inputHtml=t,S(M(t)),this.inputTextList=E},onChangeTextList:function(t){this.inputTextList=t},onEmitTextList:function(t){var e=M(this.inputHtml);$(e,t);var n=document.createElement("div");e.forEach(function(t){n.appendChild(t)}),this.outputHtml=n.innerHTML}}},k=N,B=(n("034f"),Object(d["a"])(k,i,r,!1,null,null,null)),D=B.exports;n("f9e3"),n("2dd8");s["default"].config.productionTip=!1,s["default"].use(a["a"]),new s["default"]({render:function(t){return t(D)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.ea512571.js.map