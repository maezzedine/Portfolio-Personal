<template>
    <div class="blog row m-0">
        <v-card 
            tag="a"
            :href="post.link" target="_blank"
            class="col-12 col-sm-3"
            v-for="post in posts" :key="post.id"
        >
            <v-img :src="post.image"></v-img>
            <v-card-title>{{post.title}}</v-card-title>
            <v-card-subtitle>Medium ● {{post.date}}</v-card-subtitle>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'Blog',
    data: () => {
        return {
            posts: [
                {
                    id: 1,
                    title: 'The beautiful mind of a machine',
                    date: 'April 19',
                    link: 'https://maezzedine.medium.com/the-beautiful-mind-of-a-machine-afdaea9294c3',
                    image: 'https://miro.medium.com/max/400/1*n05beme0IT1vPNjqmcH2SA.jpeg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" src="./Blog.scss" scoped></style>
