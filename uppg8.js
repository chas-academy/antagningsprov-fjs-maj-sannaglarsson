

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const persons = [
    {name: "Sanna", age: 20},
    {name: "Maja", age: 51},
    {name: "Stefan", age: 53},
    {name: "Wilma", age: 23},
    {name: "Peter", age: 47}
];

function adults(array) {
    array.forEach(person => {
        if (person.age > 30) {
            console.log(person.name);
        }
    });
};

adults(persons);

};

module.exports = { uppg8 };