var input = document.querySelector('.container input');
var addButton = document.querySelector('.Cbien');
function newElement() {
    var inputValue = input.value;
    if (inputValue === '') {
        alert("ecrit quelque chose ou ca ne marchera jamais !");
    } else {
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.querySelector('.boxsizing ul').appendChild(li);
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        input.value ="";
    }
}
addButton.onclick = newElement;
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        newElement();
    }
});