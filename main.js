let bitcoin = [40604, 40648, 38275, 30386, 39445, 39121, 38494];
let highest = 0;
let lowest = 0;
let total = 0;
let dates = ["11 dec", "12 dec", "13 dec", "14 dec", "15 dec", "16 dec", "17 dec"];
const sendButton = document.querySelector(".send");
const nameButton = document.querySelector("input#nickname");
const emailButton = document.querySelector("input#email");

// Gemiddeld
for (let i = 0; i < bitcoin.length; i++) {
    total += bitcoin[i];
}
const middle = total / bitcoin.length;
console.log("gemidelde: " + middle);

// Hoogste
for (let i = 0; i < bitcoin.length; i++) {
    const btc = bitcoin[i];

    if (btc > highest) {
        highest = btc
    }
    
}

console.log("Hoogste waarde Bitcoin:", highest);

// Laagste
for (let i = 2; i < bitcoin.length; i++) {
    const btc = bitcoin[i];

    if (btc > lowest) {
        lowest = btc
    }
    

    console.log("Laagste waarde bitcoin:", lowest);
}

// Opdr 2
let work = {
    beroep: [
        "Apotheker", "Automonteur", "Bouwvakker", "Elektricien", "Kinderopvang", "Metselaar", "Timmerman"
    ],

    salaris: [
        3450, 2000, 1650, 2200, 1890, 2400, 2300
    ]
}
let totalSalary = 0
for (let i = 0; i < work.salaris.length; i++) {
    totalSalary += work.salaris[i]
}
let middleSalary = totalSalary / work.salaris.length
console.log('Totale salaris: ' + totalSalary);
console.log('Gem. salaris: ' + middleSalary);
 
highest = 0
lowest = Infinity
for (let i = 0; i < work.salaris.length; i++) {
    const salary = work.salaris[i];
    if(salary > highest){
        highest = salary
    }
    if (salary < lowest){
        lowest = salary
    }
}
 
console.log('Hoogste salaris: ' + highest);
console.log('Laagste salaris: ' + lowest);

// Opdr 3

sendButton.addEventListener("click", function(){
    const nameButton = document.querySelector("input#nickname");
    const emailButton = document.querySelector("input#email");

    if (nameButton.value.length < 3) {
        nameButton.classList.add("error");
        nameButton.classList.remove("valid");
    } else {
        nameButton.classList.add("valid");
        nameButton.classList.remove("error");
        console.log(nameButton.value);
    }

    if (emailButton.value.length === 0) {
        emailButton.classList.add("error");
        emailButton.classList.remove("valid");
    } else {
        emailButton.classList.remove("error");
        emailButton.classList.add("valid");
    }
});

// Opdr 4
function toonProductCard(product) {
    const container = document.querySelector('.producten-container');
    const card = document.createElement('div');
    card.classList.add('card');
 
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Prijs: €${product.price}</p>
    `;
    container.appendChild(card);
}
 
fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            toonProductCard(product);
})});
