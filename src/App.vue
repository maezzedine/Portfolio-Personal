<template>
  <div id="app">
    <Home />
    <Overview />
  </div>
</template>

<script>
import Home from './views/Home/Home'
import Overview from './views/Overview/Overview'

export default {
  components: {
    Home,
    Overview
  }
}
</script>

<style lang="scss" src="./App.scss"></style>
