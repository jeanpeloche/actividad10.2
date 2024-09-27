document.getElementById("buttonText").addEventListener("click", function() {

    const input = document.getElementById("inputText").value;

    localStorage.setItem("texto", input);

    document.getElementById("inputText").value = "";
});