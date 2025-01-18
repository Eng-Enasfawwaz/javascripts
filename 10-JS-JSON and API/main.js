// 1. JSON Stringify and Parse
const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// 2. Count Properties in JSON Object
function countProperties(jsonObj) {
    return Object.keys(jsonObj).length;
}
console.log("Number of properties:", countProperties(person));

// 3. Get Book Titles from JSON Object
const booksJson = {
    books: [
        { title: "Book One", author: "Author One", publicationDate: "2020-01-01" },
        { title: "Book Two", author: "Author Two", publicationDate: "2021-06-15" },
        { title: "Book Three", author: "Author Three", publicationDate: "2019-11-22" }
    ]
};

function getBookTitles(jsonObj) {
    return jsonObj.books.map(book => book.title);
}
console.log("Book Titles:", getBookTitles(booksJson));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







// 4. Calculate Average of Specific Property
function calculateAverage(jsonObj, property) {
    const total = jsonObj.reduce((sum, item) => sum + item[property], 0);
    return total / jsonObj.length;
}

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 90 },
    { name: "Charlie", grade: 78 }
];
console.log("Average Grade:", calculateAverage(students, "grade"));



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@












// 5
function sortObjectsByProperty(jsonObj, property) {
    return jsonObj.sort((a, b) => a[property] - b[property]);
}
console.log("Sorted Students by Grade:", sortObjectsByProperty(students, "grade"));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@













// 6. Sort Cities by Population
const citiesJson = {
    cities: [
        { name: "City A", population: 500000, country: "Country X" },
        { name: "City B", population: 1200000, country: "Country Y" },
        { name: "City C", population: 800000, country: "Country Z" }
    ]
};

function getCityNamesSortedByPopulation(jsonObj) {
    return jsonObj.cities
        .sort((a, b) => b.population - a.population)
        .map(city => city.name);
}
console.log("Cities Sorted by Population:", getCityNamesSortedByPopulation(citiesJson));


async function loadJSONData(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Error loading JSON file");
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example Usage
loadJSONData("data.json").then(data => {
    console.log("Total Revenue:", calculateTotalRevenue(data.products));
    console.log("Cities Sorted by Population:", getCityNamesSortedByPopulation(data));
});








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 7
const products = [
    { name: "Laptop", price: 1000, quantity: 5 },
    { name: "Smartphone", price: 700, quantity: 10 },
    { name: "Headphones", price: 100, quantity: 20 },
    { name: "Monitor", price: 300, quantity: 7 }
];

function calculateTotalRevenue(jsonObj) {
    return jsonObj.reduce((total, product) => total + product.price * product.quantity, 0);
}
console.log("Total Revenue:", calculateTotalRevenue(products));
 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@









// 8


async function fetchGitHubRepositories(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const repos = await response.json();
        return repos.map(repo => repo.name);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchGitHubRepositories("Eng-Enasfawwaz").then(repoNames => {
    console.log("GitHub Repositories:", repoNames);
});
