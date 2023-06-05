// Day 07:ARRAY METHODS


// Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
//1. Get all the countries from the Asia continent /region using the Filter function
//2. Get all the countries with a population of less than 2 lakhs using Filter function
//3. Print the following details name, capital, flag using forEach function
//4. Print the total population of countries using reduce function
//5. Print the country which uses US Dollars as currency.

//  1


fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        const asiaCountries = data.filter((country) =>
            country.region.includes("Asia")
        );
        console.log(asiaCountries);
    })
    .catch((error) => console.log(error));



//    2

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        const countriesWithLowPopulation = data.filter(
            (country) => country.population < 200000
        );
        console.log(countriesWithLowPopulation);
    })
    .catch((error) => console.log(error));



//    3

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital);
            console.log("Flag:", country.flags.svg);
        });
    })
    .catch((error) => console.log(error));



// 4

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        const totalPopulation = data.reduce(
            (acc, country) => acc + country.population,
            0
        );
        console.log("Total population:", totalPopulation);
    })
    .catch((error) => console.log(error));





// 5

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        const countriesWithUSD = data.filter((country) =>
            country.currencies.hasOwnProperty("USD")
        );
        console.log(countriesWithUSD);
    })
    .catch((error) => console.log(error));







