<template>
    <div class="projects">
        <v-timeline
            :dense=small_screen
        >
        <v-timeline-item
            v-for="project in projects"
            :key="project.id"
            small
        >
            <!-- <a target="_blank" :href="project.link"> -->
                <v-card tag="a" :href="project.link" target="_blank" class="elevation-2" color="#9faab6">
                    <v-card-title class="title">
                        {{project.title}}
                    </v-card-title>
                    <v-card-subtitle>{{project.subtitle}}</v-card-subtitle>
                    <v-card-text class=" text--primary">
                        {{project.content}}
                    </v-card-text>
                </v-card>
            <!-- </a> -->
        </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data: () => {
        return {
            small_screen: screen.width < 700,
            projects: [
                {
                    id: 5,
                    title: 'Portoflio - Hiba Lubbad',
                    subtitle: 'Personal Website',
                    link: 'http://hibalubbad.com',
                    content: ""
                },
                {
                    id: 4,
                    title: 'ABJAD',
                    subtitle: 'Arabic Programming Language',
                    link: 'https://www.abjadlanguage.com',
                    content: "An Arabic Programming Language I developed using C#. It is an interpreted " +
                    "scripting language similar to Javascript.\n The goal from building ABJAD is to help " +
                    "non-English speakers in the Arab region learn the basics about coding, before shifting " +
                    "to a professional English-based programming language later on in their career."
                },
                {
                    id: 3,
                    title: 'Speech Emotion Recognition',
                    subtitle: 'Course Project',
                    link: 'https://github.com/maezzedine/CMPS287-Speech-Emotion-Recognition',
                    content: "Course Project: recognizing 7 different moods (angry, disgust, fear, happy, neutral, sad, surprised) from speech."
                },
                {
                    id: 2,
                    title: 'AUB Outlook',
                    subtitle: 'Website',
                    link: 'https://github.com/maezzedine/Outlook',
                    content: "A website for AUB Outlook - The AUB Students Newspaper. Support for multi-languages and multi-themes."
                },
                {
                    id: 1,
                    title: 'Invent Chatbot',
                    subtitle: 'Internship Project',
                    link: 'https://t.me/InventSolutionsBot',
                    content: "A chatbot built throughout my internship at Invent Solutions SARL. Support for 6 languages, Natural Language Processing and audio messages understanding."
                },
            ]
        }
    }
}
</script>

<style lang="scss" src="./Projects.scss" scoped></style>

