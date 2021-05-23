<template>
  <div class="overview" id="overview">
    <v-app-bar
      color="#18212b"
      dark
      :collapse="small_screen && collapse"
      class="pr-15"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-avatar @click="toggle_appbar"><v-img src="/avatar.png"></v-img></v-avatar>
      <!-- <img src="avatar.png"> -->
      <v-spacer></v-spacer>
      <!-- <v-spacer></v-spacer> -->

      <v-tabs class="mx-0 mx-sm-10" align-with-title>
        <router-link to="/education#overview"><v-tab>Education</v-tab></router-link>
        <router-link to="/skills#overview"><v-tab>Skills</v-tab></router-link>
        <router-link to="/experience#overview"><v-tab>Experience</v-tab></router-link>
        <router-link to="/projects#overview"><v-tab>Projects</v-tab></router-link>
        <router-link to="/blog#overview"><v-tab>Blog</v-tab></router-link>
        <router-link to="/contact#overview"><v-tab>Contact</v-tab></router-link>
        <a href="http://resume.maezzedine.com" target="_blank"><v-tab>Resume</v-tab></a>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

    </v-app-bar>

    <div class="body mx-auto my-16 pa-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data: () => {
    return {
      small_screen: screen.width < 700,
      collapse: true
    }
  },
  methods: {
    toggle_appbar() {
      this.$data.collapse = !this.$data.collapse
    }
  }
}
</script>

<style lang="scss" src="./Overview.scss" scoped></style>
