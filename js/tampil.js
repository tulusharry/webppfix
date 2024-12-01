function tampilkanId() {
    var select = document.getElementById("orang");
    var selectedOption = select.options[select.selectedIndex];
    var id = selectedOption.id;
    document.getElementById("output").innerText = "Quantity :" + id;
}