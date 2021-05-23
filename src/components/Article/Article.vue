<template>
  <div class="article pa-sm-3">
    <v-chip-group
      active-class="primary--text"
      column
    >
      <v-chip 
        dark 
        class="mr-4"
        color="primary" 
        v-for="label in article.labels" 
        :key=label
      >{{label}}</v-chip>
    </v-chip-group>
    <h1 class="white--text mb-5">{{article.title}}</h1>  
    <time class="text-subtitle-1">{{getTimeString(article.published)}}</time>
    <div id="content"></div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Article',
  data: () => {
    return {
      articleId: undefined,
      article: {},
    }
  },
  created() {
    this.getArticleId()
  },
  methods: {
    getArticleId() {
      this.$data.articleId = this.$route.params['id'];
      if (this.$data.articleId == undefined) {
          api.GetThumbnail().then(d => {
              this.$data.articleId = d.items[0].id
              if (this.$data.articleId) {
                  this.$router.push(`/space/${this.articleId}`);
              }
              this.getArticle();
          });
      }
      else if (this.articleId == null) {
          new Promise(r => setTimeout(r, 500)).then(_ => this.getArticleId());
      }
      else {
        this.getArticle();
      }
    },
    getArticle() {
      if (this.$data.articleId ) {
        api.GetArticle(this.$data.articleId)
          .then(d => {
              this.$data.article = d;
              this.fillBody();
          });
      }
    },
    fillBody() {
      var bodyDiv = document.getElementById('content');
      if (bodyDiv != null && this.$data.article.content != undefined) {
        bodyDiv.innerHTML = this.$data.article.content;
      }
      else {
        new Promise(r => setTimeout(r, 500)).then(_ => this.fillBody());
      }
    },
    getTimeString(time) {
        if (time == undefined) {
            return "";
        }
        var date = new Date(time);
        return date.toLocaleDateString();
    },
  },
  watch: {
    $route () {
      this.getArticleId()
    } 
  }
}
</script>

<style lang="scss" src="./Article.scss" scoped></style>
