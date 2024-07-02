// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/files')
        .then(response => response.json())
        .then(files => {
            const courseList = document.getElementById('courseList');
            const tdList = document.getElementById('tdList');

            files.forEach(file => {
                const fileDiv = document.createElement('div');
                fileDiv.className = 'file';
                fileDiv.innerHTML = `
                    <h3>${file.name}</h3>
                    <a href="/uploads/${file.filename}" target="_blank">Télécharger</a>
                `;
                if (file.type === 'course') {
                    courseList.appendChild(fileDiv);
                } else if (file.type === 'td') {
                    tdList.appendChild(fileDiv);
                }
            });
        })
        .catch(error => console.error('Erreur:', error));
});
// script.js
// script.js
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

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const typeInput = document.getElementById('type');
    const niveauInput = document.getElementById('niveau');

    if (fileInput.files.length === 0) {
        alert('Veuillez sélectionner un fichier.');
        return;
    }

    if (!typeInput.value) {
        alert('Veuillez sélectionner le type de document.');
        return;
    }

    if (!niveauInput.value) {
        alert('Veuillez sélectionner le niveau d\'étude.');
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('type', typeInput.value);
    formData.append('niveau', niveauInput.value);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Fichier importé avec succès.');
        } else {
            alert('Erreur lors de l\'importation du fichier.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'importation du fichier.');
    });
});
