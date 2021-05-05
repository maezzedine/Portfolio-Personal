<template>
  <div class="overview" id="overview">
    <!-- <router-view/> -->
    <v-app-bar
      color="#18212b"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Collapsing Bar</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-tabs align-with-title>
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </v-app-bar>
    
    <!-- <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="100vh"
    >
        <div style="height: 120vh"></div>
    </v-sheet> -->

  </div>
</template>

<script>
export default {
  name: 'Overview'
}
</script>

<style lang="scss" src="./Overview.scss" scoped></style>
