// !VARIABILI
const kmCost = 0.21;

//? page button
const sendBtn = document.querySelector("#submit"); //* object | null
// console.log(sendBtn);

//? event listener
sendBtn.addEventListener("click", function() {
    // console.log("funziono")

    //? raccolta dati
    const kmInput = document.querySelector("#km-todo"); //* object | null
    // console.log(kmInput);

    const kmInputValue = parseInt(kmInput.value); //* number
    console.log("il passeggero deve percorrere " + kmInputValue + " km");

    const ageInput = document.querySelector("#user-age");
    // console.log(ageInput);

    const ageInputValue = parseInt(ageInput.value); //* number
    console.log("il passeggero ha " + ageInputValue + " anni");

    //? calcolo biglietto intero
    const price = kmCost * kmInputValue; //* number
    console.log("il prezzo del biglietto è di € " + price);

    //? condizione discount
    let discount = 0; //* number

    if (ageInputValue < 18) {
        discount = 20;
    } else if (ageInputValue > 65) {
        discount = 40;
    }

    const totalDiscount = (price * discount) / 100 //* number
    console.log("ha diritto ad uno scnto di € " + totalDiscount);

    //? prezzo finale
    const finalPrice = price - totalDiscount //* number
    console.log("il totale compreso di sconto è di € " + finalPrice);
})
