## Sortable

This exercise will be used to evaluate your JS Challenge. It will be performed in groups of 3 or 4.

### Instructions

You are a villain and your dream is to end with those annoying, yoga pants,
weird masks wearing **superheroes**. You never understood why are some of them
considered superheroes just because they are rich. Others annoy you with their
philosophical speeches. And of course that something tragic has had to happen
to them for the people to feel sorry for them. \
Anyway, we've found *confidential* information about those superheroes.

> Your task for the moment is to build a web page in order to organize all the
> data from those smartypants.
> This information can be found here: [all.json](https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json).


#### Fetching the data

In order to get the information out of the API you should use `fetch`.
In JS when you use `fetch` it always returns a `Promise` we will look
deeper into those later on, for now just refer to the code example below:

```js
const loadData = heroes => {
  console.log(heroes) // write your code using the data in a function
  // note that you can not access heroes before this function is called.
}

// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
  .then((response) => response.json()) // parse the response from JSON
  .then(loadData) // .then will call the function with the JSON value
```

> The only part where you can use the heroes data is located inside the function
that is passed to the last `.then()` call (`loadData` in this example). 
The reason is that fetching the data from a distant server takes time, and 
`loadData` is executed when the when the browser receives the heroes data, and
the server might take some time. Before that, it's unavailable.

#### Display

Not every field should be presented in the `<table>` element,
the necessary data will be:

- Icon (`.images.xs`, should be displayed as images and not as a string)
- Name (`.name`)
- Full Name (`.biography.fullName`)
- Powerstats (each entry of `.powerstats`)
- Race (`.appearance.race`)
- Gender (`.appearance.gender`)
- Height (`.appearance.height`)
- Weight (`.appearance.weight`)
- Place Of Birth (`.biography.placeOfBirth`)
- Alignement (`.biography.alignment`)

The information must be displayed in multiple pages. \
A `<select>` input is used to chose from `10`, `20`,`50`, `100` or `all results`.

> The default selected page size option must be `20`

#### Search

It must be possible to filter information by searching the name as a string
  *(ex: superheroes that contain **man** in their name).*
- The search should be interactive, in other words, the results should be
    displaying as you write, not needing a button for you to click.

#### Sort

It must be possible to sort by any columns of the table
  *(either alphabetically or numerically).*

- Initially all rows should be sorted by the column `name` by `ascending` order
- First click will order the column by `ascending` value
- Consecutive clicks will toggle between `ascending` and `descending` order
- Note that, for example, the column `weight` will be composed of strings, so
    the correct order would be `['78 kg', '100 kg']` instead of the other way
    around
- Missing values should always be sorted last.

> As you know, when you are against heroes, **speed** is critical, every operations on
> the database should be very fast and not slow down the browser

### Deliverables

 - Git repository link of the entire code base
 - The repository should contain a top-level `Readme.md` file that :
    - Explains the project in a few sentences
    - Explains how to use it
    - Explains how the code is organized (at a file and function level)
    - Gives a high-level view of the work distribution among the group
    - Gives a list of things that could be improved and your ideas on how to do it.

☝😉 Make sure to respect the good practices :
 - Indent your code correctly
 - Name your functions, variables, files, etc. in an intuitive manner
 - Use correctly-named functions to subdivide your work into smaller, easier chunks (KISS)
 - Avoid code duplication (DRY)
 - Commit your work on a regular basis


### Project Defense

You will need to defend your project oraly in 15 minutes presentations. You will need to
 - Demonstrate your app
 - Present the code (in a logical, understandable manner, even if it is not comprehensive)
 - Give a summary of how you distributed the different tasks among members of the group.

Each presentation will be followed by a Q&A segment.

💡 It is strongly advised to repeat your presentation at least once with your group before the presentation.
 