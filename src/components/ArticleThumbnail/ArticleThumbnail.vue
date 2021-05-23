<template>
    <div>
        <v-card v-if="small_screen"
            elevation="24"
            color="#9faab6"
            class="mx-auto pa-2"
        >
            <v-carousel
                height="200px"
                hide-delimiters
                :continuous="false"
            >
                <v-carousel-item
                    v-for="post in posts.items"
                    :key="post.id"
                >
                    <v-sheet
                        color="transparent"
                        tile
                        height="100%"
                    >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <router-link class="thumbnail-post"
                                :to="{ name: 'Article', params: { id: post.id } }">
                                <v-card
                                    elevation="0"
                                    color="transparent"
                                    class="my-5"
                                >
                                    <v-card-subtitle><span v-for="label in post.labels" :key=label>{{label}} </span> </v-card-subtitle>
                                    <div class="mx-3 text-subtitle-1--primary">{{post.title}}</div>
                                    <v-card-text><time>{{getTimeString(post.published)}}</time></v-card-text>
                                </v-card>
                            </router-link>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>

        
        <v-card
            v-else 
            elevation="16"
            max-width="400"
            class="mx-auto"
            height="80vh"
        >
                <v-list color="#9faab6">
                    <v-subheader>Archive</v-subheader>
                    <v-list-item-group>
                        <template v-for="item in posts.items">
                            <router-link :key="item.id" :to="{ name: 'Article', params: { id: item.id } }">
                                <v-list-item >
                                    <v-list-item-content>
                                        <v-list-item-title>{{item.title}}</v-list-item-title>
                                        <v-list-item-subtitle><span v-for="label in item.labels" :key=label>{{label}}</span></v-list-item-subtitle>
                                        <v-list-item-subtitle class="text-right"><time>{{getTimeString(item.published)}}</time></v-list-item-subtitle>
                                    </v-list-item-content>
                                    <!-- <v-list-item-content></v-list-item-content> -->
                                </v-list-item>
                            </router-link>
                            <v-divider :key="'divider' + item.id"></v-divider>
                        </template>
                    </v-list-item-group>
                </v-list>
        </v-card>
    </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'ArticleThumbnail',
  data: () => {
      return {
        small_screen: screen.width < 700,
        posts: [],
      }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
        api.GetThumbnail()
            .then(d => this.$data.posts = d);
    },
    getTimeString(time) {
        var date = new Date(time);
        return date.toLocaleDateString();
    }
  }
}
</script>

<style lang="scss" src="./ArticleThumbnail.scss" scoped></style>
