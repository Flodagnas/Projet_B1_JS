console.log("Script search loaded")

callJson()

let search = ""
let searchSelect = document.getElementById('searchSelect').value

let tabLines = []

document.getElementById('searchInput').addEventListener('keyup', () => {
    search = document.getElementById('searchInput').value
    callJson()
})

function loadTab(heroes) {
    let lines = document.getElementsByClassName('line')
    for (let line of Array.from(lines)) {
        line.remove()
    }

    for (let i in heroes) {
        let hero = heroes[i]
        if (search != "") {
            if (eval('hero.' + searchSelect + '.includes(search)')) {
                makeLine(hero)
            }
        } else {
            makeLine(hero)
        }
    }
}


function callJson() {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadTab) // .then will call the function with the JSON value
}

function makeLine(hero) {
    let tab = document.getElementById('elements')
    let tr = document.createElement('tr')
    tr.classList.add('line')

    // Colonnes
    let tdId = document.createElement('td')
    let tdName = document.createElement('td')
    let tdFullName = document.createElement('td')

    // Contenus
    tdId.appendChild(document.createTextNode(hero.id))
    tdName.appendChild(document.createTextNode(hero.name))
    tdFullName.appendChild(document.createTextNode(hero.biography.fullName))
    tr.appendChild(tdId); tr.appendChild(tdName); tr.appendChild(tdFullName)

    let powerStats = hero['powerstats']
    for (let i in powerStats) {
        let td = document.createElement('td')
        td.appendChild(document.createTextNode(powerStats[i]))
        tr.appendChild(td)
    }

    tabLines.push(tr)
}

document.getElementById('searchSelect').addEventListener('change', () => {
    searchSelect = document.getElementById('searchSelect').value
    callJson()
})


document.getElementById('fullName').addEventListener('click', () => {
    document.getElementById('fullName').classList.toggle('reverse')
    let lines = document.getElementsByClassName('line')
    for (let line of Array.from(lines)) {
        line.remove()
    }
    if (document.getElementById('fullName').className == 'reverse'){
        tabLines.sort(function(a,b){
            return b.getElementsByTagName('td')[2].innerHTML.localeCompare(a.getElementsByTagName('td')[2].innerHTML)
        })
    }
    else {
        tabLines.sort(function(a,b){
            return a.getElementsByTagName('td')[2].innerHTML.localeCompare(b.getElementsByTagName('td')[2].innerHTML)
        })
    }
    for (let line of tabLines){
        document.getElementById('elements').appendChild(line)
    }
})


/*const sortedByName = url.sort(function(a, b) {
    return a.name - b.name;
});

console.log(sortedByName);*/