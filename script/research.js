console.log("Script super-hero loaded")

const display = () => {
    let div = document.createElement('div')
}
let test = []
let page = 0
let select = document.getElementById('nb-elem').value

console.log(test);
const loadData = heroes => {
    let tab = document.getElementById('elements')
    
    for (let i in heroes) {
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

    
Array.from(document.getElementsByClassName('line')).forEach(tr => {
    test.push(tr)
});
console.log(test);


function separation() {
    
    let tab = document.getElementById('elements')
    let lines = document.getElementsByTagName('tr')
    Array.from(lines).forEach(lines => {
        lines.remove()
    });
    if (select === "") {
        for (let i = 0; i < test.length; i++) {
            tab.appendChild(test[i])
        }
    }
    else {
        let start = page * select
        let end = start + select - 1
        let tri = test.slice(start, end)
        console.log(test);
        for (let i of tri) {
            tab.appendChild(i)
        }
        console.log(start);
        console.log(end);      
    }
}

document.getElementsByName('previous')[0].addEventListener('click', () => {
    page -= 1
    console.log(page);
})

document.getElementsByName('previous')[1].addEventListener('click', () => {
    page -= 1
    console.log(page);
})

document.getElementsByName('next')[0].addEventListener('click', () => {
    page += 1
    console.log(page);
})

document.getElementsByName('next')[1].addEventListener('click', () => {
    page += 1
    console.log(page);
})

document.getElementById('nb-elem').addEventListener('change', () => {
    select = document.getElementById('nb-elem').value
    console.log(select);
    separation()
    
})

