import Vue from "vue";
import app from "./components/app.vue"
import list from "./components/list.vue"

new Vue({
    el: "#app",
    components: {
        "app": app,
        "list": list
    }
})