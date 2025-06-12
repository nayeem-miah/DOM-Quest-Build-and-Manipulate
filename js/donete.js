
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