const loadData = heroes => {
    console.log(heroes)
  }

fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
  .then((response) => response.json())
  .then(loadData)

console.log();