function showCourseOptions() {
    var dropdown = document.getElementById("courseDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var courseOptionsDiv = document.getElementById("courseOptions");

    // Effacer le contenu actuel des options de cours
    courseOptionsDiv.innerHTML = "";

    // Afficher les options de cours appropriées
    if (selectedOption === "7eme") {
        courseOptionsDiv.innerHTML = "<a href='#7eme'>7ème de base</a>";
    } else if (selectedOption === "8eme") {
        courseOptionsDiv.innerHTML = "<a href='#8eme'>8ème Année</a>";
    } else if (selectedOption === "9eme") {
        courseOptionsDiv.innerHTML = "<a href='#9eme'>9ème Année</a>";
    } else if (selectedOption === "1er") {
        courseOptionsDiv.innerHTML = "<a href='#1er'>1er Année</a>";
    } else if (selectedOption === "2eme") {
        courseOptionsDiv.innerHTML = "<a href='#2eme'>2ème Année</a>";
    }else if (selectedOption === "3eme") {
        courseOptionsDiv.innerHTML = "<a href='#3eme'>3ème Année</a>";
}}

function showDevoirOptions() {
    var dropdown = document.getElementById("courseDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var courseOptionsDiv = document.getElementById("courseOptions");

    // Effacer le contenu actuel des options de cours
    courseOptionsDiv.innerHTML = "";

    // Afficher les options de cours appropriées
    if (selectedOption === "7eme") {
        courseOptionsDiv.innerHTML = "<a href='#7eme'>7ème de base</a>";
    } else if (selectedOption === "8eme") {
        courseOptionsDiv.innerHTML = "<a href='#8eme'>8ème Année</a>";
    } else if (selectedOption === "9eme") {
        courseOptionsDiv.innerHTML = "<a href='#9eme'>9ème Année</a>";
    } else if (selectedOption === "1er") {
        courseOptionsDiv.innerHTML = "<a href='#1er'>1er Année</a>";
    } else if (selectedOption === "2eme") {
        courseOptionsDiv.innerHTML = "<a href='#2eme'>2ème Année</a>";
    }else if (selectedOption === "3eme") {
        courseOptionsDiv.innerHTML = "<a href='#3eme'>3ème Année</a>";
}
}
// script.js
function redirectToPage(value) {
    if (value) {
        window.location.href = value + ".html"; // Assumes each option value corresponds to a filename
    }
}