import { app, appH } from "./components/app"
import { list, listH } from "./components/list"

console.log(appH)

document.getElementById("app").innerHTML = appH + listH


app()
list()