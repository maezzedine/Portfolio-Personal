<template>
  <v-app >
    <home />
    <overview />
  </v-app>
</template>

<script>

import Home from './views/Home/Home'
import Overview from './views/Overview/Overview'

export default {
  name: 'App',

  components: {
    Home, Overview
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" src="./App.scss"></style>