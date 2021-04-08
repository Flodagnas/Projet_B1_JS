console.log("Script display loaded")

let linesInTab = []
let pageNumero = 0
let select = document.getElementById('nb-elem').value

callJson()

// Traitement du tableu de données
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

// Chargement du JSON et des fonctions associées
function callJson() {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadTab) // .then will call the function with the JSON value
    .then(() => {
        linesInTab = []
        document.querySelectorAll('.line').forEach(tr => {
            linesInTab.push(tr)
        })
    })
    .then(pagination)
}

// Création et affichage des lignes du tableau
function makeLine(hero) {
    let tbody = document.getElementById('elements')
    let tr = document.createElement('tr')
    tr.classList.add('line')

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
    oImg.setAttribute('src', hero.images.xs);
    tdPhoto.appendChild(oImg)
    tdName.appendChild(document.createTextNode(hero.name))
    tdFullName.appendChild(document.createTextNode(hero.biography.fullName))
    tdRace.appendChild(document.createTextNode(hero.appearance.race))
    tdGender.appendChild(document.createTextNode(hero.appearance.gender))
    tdHeight.appendChild(document.createTextNode(hero.appearance.height))
    tdWeight.appendChild(document.createTextNode(hero.appearance.weight))
    tdPlaceOfBirth.appendChild(document.createTextNode(hero.biography.placeOfBirth))
    tdAlignement.appendChild(document.createTextNode(hero.biography.alignment))
    tr.appendChild(tdPhoto); tr.appendChild(tdName); tr.appendChild(tdFullName)

    let powerStats = hero['powerstats']
    for (let i in powerStats) {
        let td = document.createElement('td')
        td.appendChild(document.createTextNode(powerStats[i]))
        tr.appendChild(td)
    }
    tr.appendChild(tdRace); tr.appendChild(tdGender); tr.appendChild(tdHeight); tr.appendChild(tdWeight); tr.appendChild(tdPlaceOfBirth); tr.appendChild(tdAlignement)

    tabLines.push(tr)
    tbody.appendChild(tr)   
    
}

// Pagination du tableau
function pagination() {
    
    let tbody = document.getElementById('elements')
    let lines = document.querySelectorAll('.line')
    lines.forEach(line => {
        line.remove()
    })
    if (select === "") {
        for (let i = 0; i < linesInTab.length; i++) {
            tbody.appendChild(linesInTab[i])
        }
    } else {
        let start = parseInt(pageNumero) * parseInt(select)
        let end = parseInt(start) + parseInt(select) - 1
        let tri = linesInTab.slice(start, end)
        for (let line of tri) {
            tbody.appendChild(line)
        }  
    }
}

// Boutons 'next' et 'previous' pour pagination
document.getElementsByName('previous')[0].addEventListener('click', () => {
    pageNumero -= 1
    pagination()
})
document.getElementsByName('previous')[1].addEventListener('click', () => {
    pageNumero -= 1
    pagination()
})
document.getElementsByName('next')[0].addEventListener('click', () => {
    pageNumero += 1
    pagination()
})
document.getElementsByName('next')[1].addEventListener('click', () => {
    pageNumero += 1
    pagination()
})

// Liste à choix pour pagination
document.getElementById('nb-elem').addEventListener('change', () => {
    select = document.getElementById('nb-elem').value
    console.log(select)
    pagination()
})