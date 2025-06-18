function getIdByTextValue(id) {
    const mainAccount = document.getElementById(id);
    let balance = parseFloat(
        mainAccount.innerText.replace(/[^\d.]/g, "")
    );
    return balance;
};

