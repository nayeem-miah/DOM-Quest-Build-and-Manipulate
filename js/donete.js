
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
})


// get donate cart data
// const donateCart = document.getElementsByClassName("donate-cart");
// console.log(donateCart);

// const donateCartButton
// Elements
const yourMainAccount = document.getElementById("your-amount");
const totalDonateAmount = document.getElementById("total-donate-amount");
const inputDonateAmount = document.getElementById("input-donate-amount");
const donateButton = document.getElementById("donate-cart-btn");

// Donation button click event
donateButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Parse balance safely
    let yourMainAccountBalance = parseFloat(
        yourMainAccount.innerText.replace(/[^\d.]/g, "")
    );
    if (isNaN(yourMainAccountBalance)) yourMainAccountBalance = 0;

    // Parse input value
    const inputAmount = parseFloat(inputDonateAmount.value);
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("❌ দয়া করে একটি সঠিক সংখ্যা লিখুন");
        return;
    }

    // Check balance
    if (inputAmount > yourMainAccountBalance) {
        alert("⚠️ আপনার অ্যাকাউন্টে যথেষ্ট টাকা নেই!");
        return;
    }

    // Update your account balance
    const updatedBalance = yourMainAccountBalance - inputAmount;
    yourMainAccount.innerText = updatedBalance.toFixed(2);

    // Update total donated amount
    let donatedAmount = parseFloat(totalDonateAmount.innerText) || 0;
    const updatedDonation = donatedAmount + inputAmount;
    totalDonateAmount.innerText = updatedDonation.toFixed(2);

    // Show modal
    const modal = document.getElementById("my_modal_5");
    if (modal) {
        modal.showModal();
    }

    // Clear input field
    inputDonateAmount.value = "";
});


// donate with className


