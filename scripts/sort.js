console.log("Script sort loaded")

// Event listeners des en-têtes du tableau
document.getElementById('name').addEventListener('click', () => { sort('name', 1) })
document.getElementById('fullName').addEventListener('click', () => { sort('fullName', 2) })
document.getElementById('intelligence').addEventListener('click', () => { sort('intelligence', 3) })
document.getElementById('strength').addEventListener('click', () => { sort('strength', 4) })
document.getElementById('speed').addEventListener('click', () => { sort('speed', 5) })
document.getElementById('durability').addEventListener('click', () => { sort('durability', 6) })
document.getElementById('power').addEventListener('click', () => { sort('power', 7) })
document.getElementById('combat').addEventListener('click', () => { sort('combat', 8) })
document.getElementById('race').addEventListener('click', () => { sort('race', 9) })
document.getElementById('gender').addEventListener('click', () => { sort('gender', 10) })
document.getElementById('height').addEventListener('click', () => { sort('height', 11) })
document.getElementById('weight').addEventListener('click', () => { sort('weight', 12) })
document.getElementById('placeOfBirth').addEventListener('click', () => { sort('placeOfBirth', 13) })
document.getElementById('alignement').addEventListener('click', () => { sort('alignement', 14) })

// Triage du tableau
function sort(category, nbr) {
    deleteLines()
    let numberValue = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat']
    let specialValue = ['height', 'weight']
    
    // Inversement ou non du tri géré avec toggle
    document.getElementById(category).classList.toggle('notReverse')
    if (document.getElementById(category).className == 'notReverse'){
        // Triage des données en fonction de la catégorie sélectionnée
        linesInTab.sort(function(a,b){
            if (numberValue.includes(category)) {

                return a.getElementsByTagName('td')[nbr].innerHTML - b.getElementsByTagName('td')[nbr].innerHTML

            } else if (specialValue.includes(category)) {

                if (category == 'height') {
                    let heightAUnit = a.getElementsByTagName('td')[nbr].innerHTML.split(",")[1]
                    let heightBUnit = b.getElementsByTagName('td')[nbr].innerHTML.split(",")[1]
                    let heightAVal = heightAUnit.split(' ')[1] == 'cm' ? parseFloat(heightAUnit.split(' ')[0]) : parseFloat(heightAUnit.split(' ')[0]) * 100.0
                    let heightBVal = heightBUnit.split(' ')[1] == 'cm' ? parseFloat(heightBUnit.split(' ')[0]) : parseFloat(heightBUnit.split(' ')[0]) * 100.0
                    return heightAVal - heightBVal

                } else {
                    console.log()
                }

            } else {

                return a.getElementsByTagName('td')[nbr].innerHTML.localeCompare(b.getElementsByTagName('td')[nbr].innerHTML)
            }
        })

    } else {

        linesInTab.sort(function(a,b){
            if (numberValue.includes(category)) {

                return b.getElementsByTagName('td')[nbr].innerHTML - a.getElementsByTagName('td')[nbr].innerHTML

            } else if (specialValue.includes(category)) {

                if (category == 'height') {

                    let heightAUnit = a.getElementsByTagName('td')[nbr].innerHTML.split(",")[1]
                    let heightBUnit = b.getElementsByTagName('td')[nbr].innerHTML.split(",")[1]
                    let heightAVal = heightAUnit.split(' ')[1] == 'cm' ? parseFloat(heightAUnit.split(' ')[0]) : parseFloat(heightAUnit.split(' ')[0]) * 100.0
                    let heightBVal = heightBUnit.split(' ')[1] == 'cm' ? parseFloat(heightBUnit.split(' ')[0]) : parseFloat(heightBUnit.split(' ')[0]) * 100.0
                    return heightBVal - heightAVal

                } else {
                    console.log()
                }

            } else {
                return b.getElementsByTagName('td')[nbr].innerHTML.localeCompare(a.getElementsByTagName('td')[nbr].innerHTML)
            }
        })
    }

    pageNumero = 0

    pagination()
}