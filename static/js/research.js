console.log("Script super-hero loaded")

const display = () => {
    let div = document.createElement('div')
    
}

const loadData = heroes => {
    let tab = document.getElementById('elements')

    for (let i in heroes) {
        let tr = document.createElement('tr')

        // Colonnes
        let tdPhoto = document.createElement('td')
        let tdName = document.createElement('td')
        let tdFullName = document.createElement('td')
        let tdRace = document.createElement('td')
        let tdGender = document.createElement('td')
        let tdHeight = document.createElement('td')
        let tdWeight = document.createElement('td')
        let tdPlaceOfBirth = document.createElement('td')
        let tdAlignement = document.createElement('td')

        // Contenus
        let oImg = document.createElement("img")
        oImg.setAttribute('src', heroes[i].images.xs);
        tdPhoto.appendChild(oImg)
        tdName.appendChild(document.createTextNode(heroes[i].name))
        tdFullName.appendChild(document.createTextNode(heroes[i].biography.fullName))
        tdRace.appendChild(document.createTextNode(heroes[i].appearance.race))
        tdGender.appendChild(document.createTextNode(heroes[i].appearance.gender))
        tdHeight.appendChild(document.createTextNode(heroes[i].appearance.height))
        tdWeight.appendChild(document.createTextNode(heroes[i].appearance.weight))
        tdPlaceOfBirth.appendChild(document.createTextNode(heroes[i].biography.placeOfBirth))
        tdAlignement.appendChild(document.createTextNode(heroes[i].biography.alignment))
        tr.appendChild(tdPhoto); tr.appendChild(tdName); tr.appendChild(tdFullName)

        let powerStats = heroes[i]['powerstats']
        for (let i in powerStats) {
            let td = document.createElement('td')
            td.appendChild(document.createTextNode(powerStats[i]))
            tr.appendChild(td)
        }
        tr.appendChild(tdRace); tr.appendChild(tdGender); tr.appendChild(tdHeight); tr.appendChild(tdWeight); tr.appendChild(tdPlaceOfBirth); tr.appendChild(tdAlignement)

        tab.appendChild(tr)
    }

}

fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value


var current_page = 1;
var records_per_page = 1;

var objJson = [
    { adName: "Page 1"},
    { adName: "Page 2"},
    { adName: "Page 3"},
    { adName: "Page 4"},
    { adName: "Page 5"},
    { adName: "Page 6"},
    { adName: "Page 7"},
    { adName: "Page 8"},
    { adName: "Page 9"},
    { adName: "Page 10"}
]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page){
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};