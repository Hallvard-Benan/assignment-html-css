const movies = [
  //   {
  //     title: "Fast & Furious presents: Hobbs and Shaw",
  //     poster: "src/images/Square_Eyes_Cover1.jpeg",
  //     price: 199,
  //     id: 1,
  //     ageRating: 15,
  //     duration: "2h 17m",
  //     genre: ["Action", "Adventure", "Thriller"],
  //     rating: 6.5,
  //     releaseYear: 2019,
  //     director: ["David Leitch"],
  //     description:
  //       "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
  //   },
  {
    title: "Godzilla King of the Monsters",
    poster: "src/images/Square_Eyes_Cover2.jpeg",
    price: 199,
    id: 2,
    ageRating: 12,
    duration: "2h 12m",
    genre: ["Adventure", "Action", "Sci-Fi"],
    rating: 6.0,
    releaseYear: 2019,
    director: ["Michael Dougherty"],
    description:
      "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
  },
  {
    title: "Once Upon a Time in... Hollywood",
    poster: "src/images/Square_Eyes_Cover3.jpeg",
    price: 199,
    id: 3,
    ageRating: 15,
    duration: "2h 41m",
    genre: ["Comedy", "Drama"],
    rating: 7.6,
    releaseYear: 2019,
    director: ["Quentin Tarantino"],
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
  },
  {
    title: "Scream",
    poster: "src/images/Square_Eyes_Cover4.jpeg",
    price: 199,
    id: 4,
    ageRating: 15,
    duration: "1h 54m",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 6.3,
    releaseYear: 2022,
    director: ["Matt Bettinelli-Olpin", "Tyler Gillett"],
    description:
      "25 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.",
  },
  {
    title: "Sweetheart",
    poster: "src/images/Square_Eyes_Cover5.jpeg",
    price: 199,
    id: 5,
    ageRating: 15,
    duration: "1h 22m",
    genre: ["Adventure", "Horror", "Sci-Fi"],
    rating: 5.8,
    releaseYear: 2019,
    director: ["J.D. Dillard"],
    description:
      "Jenn has washed ashore a small tropical island and it doesn't take her long to realize she's completely alone. She must spend her days not only surviving the elements, but must also fend off the malevolent force that comes out each night.",
  },
  {
    title: "The Addams Family",
    poster: "src/images/Square_Eyes_Cover6.jpeg",
    price: 199,
    id: 6,
    ageRating: 7,
    duration: "1h 26m",
    genre: ["Animation", "Comedy", "Family"],
    rating: 5.8,
    releaseYear: 2019,
    director: ["Greg Tiernan", "Conrad Vernon"],
    description:
      "The eccentrically macabre family moves to a bland suburb where Wednesday Addams' friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.",
  },
  {
    title: "The Batman",
    poster: "src/images/Square_Eyes_Cover7.jpeg",
    price: 199,
    id: 7,
    ageRating: 12,
    duration: "2h 56m",
    genre: ["Action", "Crime", "Drama"],
    rating: 7.8,
    releaseYear: 2022,
    director: ["Matt Reeves"],
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },
  {
    title: "Toy Story 4",
    poster: "src/images/Square_Eyes_Cover8.jpeg",
    price: 199,
    id: 8,
    ageRating: 7,
    duration: "1h 40m",
    genre: ["Animation", "Adventure", "Comedy"],
    rating: 7.7,
    releaseYear: 2019,
    director: ["Josh Cooley"],
    description:
      'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
  },
];

const checkoutContainer = document.querySelector(".checkout-card-container");
const emptyContainer = document.querySelector(".empty");
const checkoutForm = document.querySelector(".checkout-form");

const queryString = document.location.search;

const params = window.location.search;
const urlParams = new URLSearchParams(params);

const items = urlParams.getAll("items");

const itemsArray = items[0].split(",");

if (itemsArray.length >= 1) {
  emptyContainer.classList.add("is-hidden");
  checkoutForm.classList.remove("is-hidden");
}

console.log(itemsArray);

const selectedMovies = itemsArray.map(function (id) {
  return movies.find(function (movie) {
    return movie.title === id;
  });
});

console.log(selectedMovies);

selectedMovies.forEach(function (movie) {
  checkoutContainer.innerHTML += `
        <div class="checkout-item-card">
            <div class="checkout-card-details">
                <h3>${movie.title}</h3>
                <p>kr${movie.price}</p>
            </div>
            <img src="${movie.poster}" alt="image of ${movie.title}" class="checkout-poster">
        </div>
        `;
});

const price = [];
selectedMovies.forEach((movie) => {
  price.push(movie.price);
});

const calculateSum = (arr) => {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const totalPrice = document.querySelector(".price_large");

totalPrice.innerHTML = calculateSum(price) + " kr";

console.log(calculateSum(price));
