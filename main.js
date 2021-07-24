const group3 = [{
    id: 1,
    name: "Austin",
    email: "parkercaustin@gmail.com",
    favColor: "green",
    unique: "son lives in England",
    image: "https://avatars.githubusercontent.com/u/70224936?v=4",
    favNumber: 3
},

{
    id: 2,
    name: "Gabriel",
    email: "gabrielsmith98@gmail.com",
    favColor: "green",
    unique: "likes video games",
    image: "https://avatars.githubusercontent.com/u/86996271?v=4",
    favNumber: 6
},

{
    id: 3,
    name: "Ruby",
    email: "rubiblr@gmail",
    favColor: "yellow",
    unique: "likes to travel",
    image: "https://avatars.githubusercontent.com/u/86809246?v=4",
    favNumber: 7
},

{
    id: 4,
    name: "Luke",
    email: "mallen1813@gmail.com",
    favColor: "yellow",
    unique: "trying for fourth child",
    image: "https://avatars.githubusercontent.com/u/74151134?v=4",
    favNumber: 8
}];

const filterFavoriteNumber = (array, number) => {
    return array.filter(memberObj => memberObj.favNumber === number)
  }

console.log(filterFavoriteNumber (group3, 8));

const filterFavoriteColor = (array, color) => {
    return array.filter(memberObj => memberObj.favColor === color)
  }

console.log(filterFavoriteColor(group3, "green"))

const filterProperty = (array, property, value) => {
    return array.filter(memberObj => memberObj[property] === value)
}

console.log(filterProperty(group3, "name", "Ruby"))