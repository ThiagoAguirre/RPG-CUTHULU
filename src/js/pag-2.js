function customAlert() {
    var modal = document.getElementById("custom-modal");
    var modalText = document.getElementById("custom-alert-text");

    modal.style.display = "block";
    modalText.textContent = "Esta é uma mensagem de alerta personalizada!";
}

function closeCustomAlert() {
    var modal = document.getElementById("custom-modal");
    modal.style.display = "none";
}
