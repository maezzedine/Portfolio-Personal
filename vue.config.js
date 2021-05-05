module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "src/styles/_variables.scss"
                `
            },
            scss: {
                additionalData: `
                @import "src/styles/_variables.scss";
                `
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
