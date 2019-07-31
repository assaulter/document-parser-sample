<template>
  <div id="app">
    <h1>Sample</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <HtmlInputForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtmlInputForm from './components/HtmlInputForm.vue';

export default {
  name: 'app',
  components: {
    HtmlInputForm,
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
