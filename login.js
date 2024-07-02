document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulation de la vérification du nom d'utilisateur et du mot de passe
    // Vous devriez remplacer cette partie par une vérification réelle via une requête à votre serveur
    if (username === 'admin' && password === 'password') {
        alert('Connexion réussie');
        window.location.href = 'espaceadmin.html'; // Rediriger vers la page d'administration
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
});
