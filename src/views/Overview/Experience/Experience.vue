<template>
    <div>
        <v-timeline
            :dense=small_screen
        >
        <v-timeline-item
            v-for="internship in internships"
            :key="internship.id"
            small
        >
            <span slot="opposite" class="white--text">{{internship.duration}}</span>
            <v-card class="elevation-2" color="#9faab6">

            <div class="row m-0">
                <div class="col-12 col-sm-6">
                <v-card-title class="title">
                    {{internship.company}}
                </v-card-title>
                <v-card-subtitle>{{internship.location}}</v-card-subtitle>

                </div>
                <v-img class="mx-auto col-9 col-sm-3" max-height="100" contain position="center" :src="internship.logo"></v-img>
            </div>
            <v-card-text class=" text--primary">
                {{internship.details}}
            </v-card-text>
            </v-card>
        </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
  export default {
    name: 'Experience',
    data: () => {
        return {
            small_screen: screen.width < 700,
            internships: [
            { 
                id: 2, 
                company: 'MUREX S.A.L',
                location: 'Beirut, Lebanon',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Murex_logo.png',
                duration: 'June 2021 - August 2021',
                role: 'Software Developer',
                details: "I was accepted to work with the Information Systems Development Team."
            },
            { 
                id: 1, 
                company: 'Invent Solutions S.A.R.L',
                location: 'Beirut, Lebanon',
                logo: 'https://lh3.googleusercontent.com/proxy/HVkSX_jdMaiQB4rBvx2SIydzTuBJsHdXCSwEcifGiMdCMZGMeX913NfzwmM-aQYJgDSGuLrC0HlxSu7iw0g4DTuA7MDedqkzUtHKoq7iyrq5uxW2YFnxFC6F',
                duration: 'July 2020 - September 2020',
                role: 'Software Developer',
                details: "I completed a sample chatbot that is influenced by an old draft. " +
                "The role of the bot is to serve the customers' queries regarding their previous " + 
                "and pending purchases and showcase the currently offered products. We integrated " +
                "it with Telegram, which saves the customers the need to install and learn about a " +
                "new app. \nI also built a web portal to be used by the company and its customers. " +
                "The company administration uses it to manage the current and new subscriptions, " +
                "while the customers can view the details and deadlines of their contracts."
            }
        ]
        }
    }
  }
</script>

<style lang="scss" src="./Experience.scss" scoped></style>


