<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <div class="button-container">
        <SimpleButton title="Hello, I'm a button"/>
      </div>
      <div class="button-container">
        <DropdownButton title="Hello, I'm also a button" :options="['I also', 'have', 'a few', 'options']"/>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleButton from './components/SimpleButton.vue'
import DropdownButton from './components/DropdownButton.vue'

export default {
  name: 'app',
  components: {
    SimpleButton,
    DropdownButton,
  }
}
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

.button-container {
  padding-bottom: 10px;
}
</style>
