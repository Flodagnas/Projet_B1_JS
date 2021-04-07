console.log("Script search loaded")

callJson()

let search = ""
let searchSelect = document.getElementById('searchSelect').value

let tabLines = []

document.getElementById('searchInput').addEventListener('keyup', () => {
    tabLines = []
    search = document.getElementById('searchInput').value
    callJson()
})

function loadTab(heroes) {
    deleteLines()

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
    tab.appendChild(tr)   
    
}

document.getElementById('searchSelect').addEventListener('change', () => {
    tabLines = []
    searchSelect = document.getElementById('searchSelect').value
    callJson()
})

document.getElementById('id').addEventListener('click', () => { sort('id', 0) })
document.getElementById('name').addEventListener('click', () => { sort('name', 1) })
document.getElementById('fullName').addEventListener('click', () => { sort('fullName', 2) })

function sort(category, nbr) {
    deleteLines()
    let numberValue = ['id', 'intelligence', 'strength', 'speed', 'durability', 'power', 'combat']
    
    document.getElementById(category).classList.toggle('notReverse')
    if (document.getElementById(category).className == 'notReverse'){
        tabLines.sort(function(a,b){
            if (!numberValue.includes(category)) {
                return a.getElementsByTagName('td')[nbr].innerHTML.localeCompare(b.getElementsByTagName('td')[nbr].innerHTML)
            } else {
                return a.getElementsByTagName('td')[nbr].innerHTML - b.getElementsByTagName('td')[nbr].innerHTML
            }
        })
    } else {
        tabLines.sort(function(a,b){
            if (!numberValue.includes(category)) {
                return b.getElementsByTagName('td')[nbr].innerHTML.localeCompare(a.getElementsByTagName('td')[nbr].innerHTML)
            } else {
                return b.getElementsByTagName('td')[nbr].innerHTML - a.getElementsByTagName('td')[nbr].innerHTML
            }
        })
    }

    for (let line of tabLines){
        document.getElementById('elements').appendChild(line)
    }
}

function deleteLines() {
    let lines = document.getElementsByClassName('line')
    for (let line of Array.from(lines)) {
        line.remove()
    }
}