const loadData = heroes => {
    console.log(heroes)

const url = fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then(loadData)

const sortedByName = url.sort(function(a, b) {
    return a.name - b.name;
});

console.log(sortedByName);
}