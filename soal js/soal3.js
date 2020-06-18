let buttonCheck = document.getElementById("button-check");

buttonCheck.addEventListener("click", () => {
    let check = document.getElementById("check").value;
    let regexCheck = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/g;
    // console.log(regexCheck.test(check));
    if (regexCheck.test(check) == true) {
        alert("kata kuncinya ditemukan!");
    } else {
        alert("kata kunci tidak tersedia");
    }
});
