document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal2");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.getElementsByClassName("close2")[0];

    const sertifikatCards = document.getElementsByClassName("sertifikat_card");

    Array.from(sertifikatCards).forEach(card => {
        card.addEventListener("click", function() {
            const imgSrc = card.getElementsByTagName("img")[0].src;
            const text = card.getElementsByClassName("sertifikat_text")[0].innerText;

            modalImg.src = imgSrc;
            modalText.innerText = text;

            modal.style.display = "flex";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
