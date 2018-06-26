// var html = require.ensure(["./components/app.html"], function() {})
// var css = require.ensure(["./components/app.css"], function() {})
// var js = require.ensure(["./components/app"], function() {})


import { app, appH } from "./components/app"
import { listH, list } from "./components/list"

document.getElementById("app").innerHTML = appH + listH

app()
list()
    // document.getElementById("imgs").src = "../../image/01.jpg"