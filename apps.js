document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const cardNumberInput = document.getElementById("card-number");
    const expirationDateInput = document.getElementById("expiration-date");
    const updateCardButton = document.getElementById("update-card-button");
    const creditCardImage = document.getElementById("credit-card-image");

    updateCardButton.addEventListener("click", function () {
        const name = nameInput.value;
        const cardNumber = cardNumberInput.value.replace(/\D/g, '');
        const expirationDate = expirationDateInput.value;

        creditCardImage.src = "karta_kredytowa.png";
        const canvas = document.createElement("canvas");
        canvas.width = creditCardImage.width;
        canvas.height = creditCardImage.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(creditCardImage, 0, 0);

        ctx.font = "20px Arial";
        ctx.fillText(name, 100, 200);
        ctx.fillText(cardNumber.replace(/(\d{4})/g, '$1 '), 100, 240);
        ctx.fillText(expirationDate, 100, 280);

        creditCardImage.src = canvas.toDataURL("image/png");
    });
});