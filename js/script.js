// !VARIABILI
const kmCost = 0.21;

//? page button
const sendBtn = document.querySelector("#submit"); //* object | null
// console.log(sendBtn);

//? event listener
sendBtn.addEventListener("click", function() {
    // console.log("funziono")

    //? raccolta dati
    const userName = document.querySelector("#user-name").value; //*object | null

    const kmInput = document.querySelector("#km-todo"); //* object | null
    // console.log(kmInput);

    const kmInputValue = parseInt(kmInput.value); //* number
    console.log("il passeggero deve percorrere " + kmInputValue + " km");

    const ageInput = document.querySelector("#user-age");
    // console.log(ageInput);

    const ageInputValue = parseInt(ageInput.value); //* number
    console.log("il passeggero ha " + ageInputValue + " anni");

    if (!isNaN(kmInputValue) && !isNaN(ageInputValue) && kmInputValue > 0 && ageInputValue > 0) {
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

        let totalDiscount = (price * discount) / 100 //* number
        if (discount === 0) {
            totalDiscount = "nessuno"
        }
        console.log("ha diritto ad uno scnto di € " + totalDiscount);

        //? prezzo finale
        let finalPrice = price - totalDiscount //* number
        if (isNaN(totalDiscount)) {
            finalPrice = price
        }
        console.log("il totale compreso di sconto è di € " + finalPrice);

        //! OUTPUT
        document.getElementById("ticketname").innerHTML = `${userName}`
        document.getElementById("ticketage").innerHTML = `${ageInputValue}`
        document.getElementById("ticketprice").innerHTML = `${price.toFixed(2)} €`
        document.getElementById("ticketdiscount").innerHTML = `${totalDiscount} €`
        document.getElementById("ticketfinalprice").innerHTML = `${finalPrice.toFixed(2)} €`

    } else {
        alert("DATI ERRATI, INSERIRE DEI DATI VALIDI!")
    }

})
