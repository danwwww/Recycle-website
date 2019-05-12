var SCHEMA = ['name', 'category', 'method', 'photo']
var categories = SCHEMA

function drawTable(search) {
    var tableSchema = document.getElementById("categories")
    tableSchema.innerHTML = ''
    categories.forEach(function (category) {
        var th = document.createElement("th")
        th.innerText = category.charAt(0).toUpperCase() + category.slice(1);
        tableSchema.appendChild(th)
    });

    var list = document.getElementById("description")
    list.innerHTML = ''
    AllItems.list.forEach(function (item) {
        if (item.category.toUpperCase().indexOf(search.toUpperCase()) != -1 || item.name.toUpperCase().indexOf(search.toUpperCase()) != -1 || search === "") {
            var row = document.createElement("tr");
            row.setAttribute("class", "selectable")
            row.onclick = function () {
                AllItems.list = [item]
                categories = SCHEMA
                drawTable('')
            };
            var infoHTML;
            categories.forEach(function (info) {
                infoHTML = document.createElement("td")
                infoHTML.innerText = item[info];
                row.appendChild(infoHTML)
            })
            list.appendChild(row)
        }
    })
}

loadItems = function () {
    AllItems.loadAll(drawTable.bind(null, ""))
}

window.addEventListener ?
    window.addEventListener("load", loadItems, false) :
    window.attachEvent && window.attachEvent("onload", loadItems);