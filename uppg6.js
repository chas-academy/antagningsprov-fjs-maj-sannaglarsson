

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

const names = ["Sanna", "Lina", "Sebbe", "Leya"]
let namesLength = names.length;

for (let i = 0; i < namesLength; i++) {
    console.log(names[i]);
};

};

module.exports = { uppg6 };