

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function sort() {
    for (let i = 0; i < 10; i++) {
        if (i % 2) {
            console.log(numbers[i], "Jämnt")
        } else {
            console.log(numbers[i], "Udda")
        };
    };    
  };

sort(numbers)

};

module.exports = { uppg9 };