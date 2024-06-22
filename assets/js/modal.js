document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var form = document.getElementById("myForm");
    var span = document.getElementsByClassName("close")[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Formaning tabiiy yuborilishini to'xtatamiz
        if (form.checkValidity()) {
            modal.style.display = "flex"; // Forma to'g'ri to'ldirilgan bo'lsa, modalni ko'rsatamiz
            setTimeout(function() {
                modal.style.display = "none"; // Modalni 5 sekunddan keyin yopamiz
            }, 2000); // 5000 millisekund - bu 5 sekund
        } else {
            alert("Formani to'liq to'ldiring!"); // Forma noto'g'ri to'ldirilgan bo'lsa, xabarnoma chiqaramiz
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
