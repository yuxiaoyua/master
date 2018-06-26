export default function() {
    var arr = [1, 2, 3, 4, 5]
    var $html = ""
    arr.forEach(function(i) {
        $html += `<li>${i}</li>`
    })

    document.getElementById("appUl").innerHTML = $html

}