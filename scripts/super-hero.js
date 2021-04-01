console.log("Script super-hero loaded")

const display = () => {
    let div = document.createElement('div')
    
}

const loadData = heroes => {
    let tab = document.getElementById('elements')

    for (let i in heroes) {
        let tr = document.createElement('tr')

        // Colonnes
        let tdId = document.createElement('td')
        let tdName = document.createElement('td')
        let tdFullName = document.createElement('td')

        // Contenus
        tdId.appendChild(document.createTextNode(heroes[i].id))
        tdName.appendChild(document.createTextNode(heroes[i].name))
        tdFullName.appendChild(document.createTextNode(heroes[i].biography.fullName))
        tr.appendChild(tdId); tr.appendChild(tdName); tr.appendChild(tdFullName)

        let powerStats = heroes[i]['powerstats']
        for (let i in powerStats) {
            let td = document.createElement('td')
            td.appendChild(document.createTextNode(powerStats[i]))
            tr.appendChild(td)
        }

        tab.appendChild(tr)
    }

}

// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value
