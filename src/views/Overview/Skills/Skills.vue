<template>
    <div class="skills">
        <v-item-group>
            <v-container>
                <v-row>
                    <v-col cols="12" md="3" 
                        v-for="skill in skills" 
                        :key="skill.id"
                    >
                        <v-item>
                            <v-hover>
                                <template v-slot:default="{ hover }">
                                    <v-card
                                        color="#768aa0"
                                        class="d-flex align-center"
                                        height="200"
                                    >
                                        <v-scroll-y-transition>
                                            <h3 class="text-center flex-grow-1">
                                                {{skill.title}}
                                            </h3>
                                        </v-scroll-y-transition>
                                        <v-fade-transition>
                                            <v-overlay
                                                v-if="hover"
                                                absolute
                                                color="#036358"
                                            >
                                                <v-btn @click="focus(skill.id)">more info</v-btn>
                                            </v-overlay>
                                        </v-fade-transition>
                                        <v-overlay
                                            opacity=".7"
                                            :value="overlay && focused == skill.id"
                                        >
                                            <v-card
                                                color="#1C2833"
                                                elevation="10"
                                                class="pa-5 text-center"
                                            >
                                                <v-list color="transparent">
                                                    <template v-for="detail in skill.details" >
                                                        <v-list-item :key="detail">
                                                            <v-list-item-content>{{detail}}</v-list-item-content>
                                                        </v-list-item>
                                                        <v-divider :key="'divider' + detail"></v-divider>
                                                    </template>
                                                </v-list>
                                                <v-btn
                                                    class="white--text"
                                                    color="teal"
                                                    @click="overlay = false"
                                                >
                                                    Hide Overlay
                                                </v-btn>
                                            </v-card>
                                        </v-overlay>
                                    </v-card>
                                </template>

                            </v-hover>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data: () => {
        return {
            focused: 0,
            overlay: false,
            skills: [
                {
                    id: 1,
                    title: 'Web Development',
                    details: ['ASP.NET Core', 'JWT Authentication', 'SQL Database']
                },
                {
                    id: 2,
                    title: 'Web Design',
                    details: ['VueJS - ReactJS', 'TypeScript - JavaScript', 'SCSS - CSS', 'HTML']
                },
                {
                    id: 3,
                    title: 'Mobile Development',
                    details: ['Flutter']
                },
                {
                    id: 4,
                    title: 'Chatbot Development',
                    details: ['Microsoft Bot Framework', 'Azure Cognitive Services'],
                },
                {
                    id: 5,
                    title: 'Machine Learning',
                    details: ['Tensorflow - scikit-learn', 'NumPy - Pandas - Matplotlib', 'Neural Networks', 'Natural Language Processing'],
                },
                {
                    id: 6,
                    title: 'Programming Skills',
                    details: ['Azure DevOps (CI/CD)', 'Azure services (portal, CLI and powershell)', 'Unit Testing', 'RESTful APIs']
                },
                {
                    id: 7,
                    title: 'Programming Languages',
                    details: ['C#', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Dart']
                }
            ]
        }
    },
    methods: {
        focus(id) {
            this.$data.overlay = true;
            this.$data.focused = id;
        }
    }
}
</script>

<style lang="scss" src="./Skills.scss" scoped></style>
