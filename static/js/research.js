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


function séparation() {
    if (nb-elem == 10) {
        tab.appendChild.slice(0, 9)
    }
    if (nb-elem == 20) {
        tab.appendChild.slice(0, 19)
    }
    if (nb-elem == 50) {
        tab.appendChild.slice(0, 49)
    }
    if (nb-elem == 100) {
        tab.appendChild.slice(0, 99)
    }
    else{
        tab.appendChild(tr)
    }
}