
// navigate donate-btn
document.getElementById("donate-btn").addEventListener("click", function () {
    // add background color -------classlist.add 
    const donateBtn = document.getElementById("donate-btn");
    donateBtn.classList.add("bg-lime-400");  // donateBtn.backgroundColor = "lime"

    // remove class donate btn
    const historyBtn = document.getElementById("history-btn");
    historyBtn.style.backgroundColor = "";

    // show donate container
    const donateContainer = document.getElementById("cart-container");
    donateContainer.classList.remove("hidden");

    // remove history container
    const historyContainer = document.getElementById("History-container");
    historyContainer.classList.add("hidden");
});

// history btm
document.getElementById("history-btn").addEventListener("click", function () {
    // add background color
    const historyBtn = document.getElementById("history-btn");
    historyBtn.style.backgroundColor = "lime";

    // remove donateContainer
    const donateContainer = document.getElementById("cart-container");
    donateContainer.classList = "hidden";

    // show history container
    const historyContainer = document.getElementById("History-container");
    historyContainer.classList.remove("hidden");

    // remove donate btn backgroundColor
    const donateBtn = document.getElementById("donate-btn");
    donateBtn.classList.remove("bg-lime-400");
});


// const donateCartButton ----single id  ---------------------------

// Elements
// const yourMainAccount = document.getElementById("your-amount");
// const totalDonateAmount = document.getElementById("total-donate-amount");
// const inputDonateAmount = document.getElementById("input-donate-amount");
// const donateButton = document.getElementById("donate-cart-btn");

// // Donation button click event
// donateButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Parse balance safely
//     let yourMainAccountBalance = parseFloat(
//         yourMainAccount.innerText.replace(/[^\d.]/g, "")
//     );
//     if (isNaN(yourMainAccountBalance)) yourMainAccountBalance = 0;

//     // Parse input value
//     const inputAmount = parseFloat(inputDonateAmount.value);
//     if (isNaN(inputAmount) || inputAmount <= 0) {
//         alert("❌ please give me a valid input number");
//         return;
//     }

//     // Check balance
//     if (inputAmount > yourMainAccountBalance) {
//         alert("⚠️ আপনার অ্যাকাউন্টে যথেষ্ট টাকা নেই!");
//         return;
//     }

//     // Update your account balance
//     const updatedBalance = yourMainAccountBalance - inputAmount;
//     yourMainAccount.innerText = updatedBalance.toFixed(2);

//     // Update total donated amount
//     let donatedAmount = parseFloat(totalDonateAmount.innerText) || 0;
//     const updatedDonation = donatedAmount + inputAmount;
//     totalDonateAmount.innerText = updatedDonation.toFixed(2);

//     // Show modal
//     const modal = document.getElementById("my_modal_5");
//     if (modal) {
//         modal.showModal();
//     }
//     // Clear input field
//     inputDonateAmount.value = "";
// });

// -------------------------------

// get your total price
document.querySelectorAll(".donate-cart").forEach((card) => {
    const donateButton = card.querySelector(".btn");
  
    donateButton.addEventListener("click", function (event) {
        event.preventDefault();

        const inputField = card.querySelector("input");
        const totalDonateAmount = card.querySelector("#total-donate-amount");

        const yourMainAccount = document.getElementById("your-amount");
        let yourMainAccountBalance = parseFloat(
            yourMainAccount.innerText.replace(/[^\d.]/g, "")
          );

        if (isNaN(yourMainAccountBalance)) yourMainAccountBalance = 0;
        
        // input amount
        const inputAmount = parseFloat(inputField.value);
        if (isNaN(inputAmount) || inputAmount <= 0) {
            alert("please give me a valid number");
            return;
        };

        // check your main account balance
        if (yourMainAccountBalance < inputAmount) {
            alert("⚠️ আপনার একাউন্টে যথেষ্ট টাকা নেই!");
            return;
        }

        // updated balance
        const updatedBalance = yourMainAccountBalance - inputAmount;
        yourMainAccount.innerText = updatedBalance.toFixed(2);

        // add your donate balance;
        const donateCurrentTotal = parseFloat(totalDonateAmount.innerText) || 0;
        const updatedDonationBalance = donateCurrentTotal + inputAmount;

        totalDonateAmount.innerText = updatedDonationBalance.toFixed(2);

        // clear input field
        inputField.value = "";

        // show modal
        const modal = document.getElementById("my_modal_5");
        if (modal) {
            modal.showModal();
        };

    });
});
  

