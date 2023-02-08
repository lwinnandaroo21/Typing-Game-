
function load() {
    for (let index = 0; index < 10; index++) {
        result = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97));
        document.getElementsByClassName("bubble")[index].innerHTML = result;
    }
}

window.addEventListener("keyup", function (event) {
    var presskey = event.key;
    if(event.key==" ") location.reload();
    for (let index = 0; index < 10; index++) {
        var aa = document.getElementsByClassName("bubble")[index];
        var bubblekey = document.getElementsByClassName("bubble")[index].innerHTML;
        if (presskey == bubblekey) {
            aa.style.display = "none";
        }
    }
})




