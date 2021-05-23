<template>
    <div class="education">
        <v-card 
            class="col-12"
            color="#bbc7d6"
            elevation="10"
        >
            <v-card-title>Undergraduate School</v-card-title>
            <v-card-subtitle>American University of Beirut (AUB)</v-card-subtitle>

            <v-row class="col-12 ma-0">
                <v-img
                    class="pa-0 mx-auto col-10 col-sm-5"
                    contain
                    max-height="200px"
                    src="https://sites.aub.edu.lb/files/2018/03/AUB20Logo20Styled20Vector-qqrk1v.png"
                >
                </v-img>
                <v-list
                    rounded
                    class="col-12 col-sm-6"
                    color="#e4e9f0"
                >
                    <v-list-item>
                        <v-list-item-content>Major</v-list-item-content>
                        <v-list-item-content>Computer Science</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Class</v-list-item-content>
                        <v-list-item-content>Fall 2021</v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Expected GPA upon Graduation</v-list-item-content>
                        <v-list-item-content>4.0</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-row>

            <v-card class="mt-5">
                <v-card-title>Awards</v-card-title>

                <v-row class="ma-0">
                    <div class="pa-5 col-12 col-sm-4">
                        <v-card-subtitle class="text-center">Full Scholarship Offered by USAID</v-card-subtitle>
                        <v-img
                            class="pa-0 mx-auto col-10 col-sm-5"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/1200px-USAID-Identity.svg.png"
                        >
                        </v-img>
                    </div>
                    <v-divider inset class="d-sm-none divider"></v-divider>
                    <v-divider vertical class="d-none d-sm-block"></v-divider>
                    <div class="pa-10 pa-sm-5 col-12 col-sm-4">
                        <v-card-subtitle class="text-center">Listed on the Dean's Honor List for the terms:</v-card-subtitle>
                        <ul class="text-center">
                            <li>Spring 2019</li>
                            <li>Fall 2019</li>
                            <li>Fall 2020</li>
                        </ul>
                    </div>
                    <v-divider inset class="d-sm-none"></v-divider>
                    <v-divider vertical class="d-none d-sm-block"></v-divider>
                    <div class="pa-10 pa-sm-5 col-12 col-sm-4">
                        <v-card-subtitle class="text-center">The  Henri Qais Naccache Best Junior Student Prize</v-card-subtitle>
                    </div>
                </v-row>
            </v-card>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'Education'
}
</script>

<style lang="scss" src="./Education.scss" scoped></style>
