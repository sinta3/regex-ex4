let verify = document.getElementById("verify");

verify.addEventListener("click", () => {
    let number = document.getElementById("number").value;
    let regex = /^[0-9]{10,12}$/;
    console.log(number);
    if (regex.test(number) == true) {
        alert(`nomer kamu ${number}`);
    } else {
        alert("nomor kamu tidak terdaftar");
    }
});
