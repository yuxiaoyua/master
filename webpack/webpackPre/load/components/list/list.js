export default function() {

    var arr = [
        "列表1",
        "列表2",
        "列表3",
        "列表4",
    ]

    var html = "";
    arr.forEach(function(i) {
        html += `<li>${i}</li>`
    })

    document.getElementById("list").innerHTML = html

}