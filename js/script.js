// !VARIABILI

const sconto20 = 0.8;
const sconto40 = 0.6;
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

    const kmInputValue = kmInput.value; //* string
    console.log(kmInputValue);

    const ageInput = document.querySelector("#user-age");
    // console.log(ageInput);

    const ageInputValue = ageInput.value; //* string
    console.log(ageInputValue);
})
