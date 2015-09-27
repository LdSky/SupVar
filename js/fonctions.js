function hideshow(elBts) {
    var el = document.getElementById(elBts);
    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        var autres = document.querySelectorAll(".infosEtab");
        var i;
        for (i = 0; i < autres.length; i++) {
            if (autres[i].style.display === "block") {
                autres[i].style.display = "none";
            }
        }
        el.style.display = "block";
    }
}