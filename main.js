const ul = document.querySelector("ol");
const movies = [
    {
        name: "The Last Song",
        year: 2010,
        director: "Julie Anne Robinson",
        picture: "https://upload.wikimedia.org/wikipedia/en/1/12/LastSongposterMarch31.png",
    
    },

    {
        name: "The Devil Wears Prada",
        year: 2006,
        director: "Lauren Weisberger",
        picture: "https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
    },
    {
        name: "Black Widow",
        year: 2021,
        director: "Cate Shortland",
        picture: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg",

    }
];
const li = `
<li>
    <p>Name: ${movies[0].name}</p>
    <p>Year: ${movies[0].year}</p>
    <p>Director: ${movies[0].director}</p>
    <p>Pictures: ${movies[0].picture}</p>
</li>
`
const images = [1,2,3,4,5];
const double = movies.map(number => number * 2);

const template = movies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src=${movie.picture} style="width:300px;height:300px;">
</li>
`);

console.log(template);
ul.innerHTML = template.join(``);