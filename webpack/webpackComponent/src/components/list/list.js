export default function() {
    var arr = ["list1", "list2", "list3"]
    var $html = ""
    arr.forEach(function(i) {
        $html += `<li>${i}</li>`
    })

    document.getElementById("listUl").innerHTML = $html

}