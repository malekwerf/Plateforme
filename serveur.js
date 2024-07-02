// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration de la session
app.use(session({
    secret: 'votre secret',
    resave: false,
    saveUninitialized: true
}));

// Initialiser Passport
app.use(passport.initialize());
app.use(passport.session());

// Utilisateurs fictifs
const users = [{ id: 1, username: 'admin', password: 'password' }];

// Stratégie de Passport
passport.use(new LocalStrategy(
    function(username, password, done) {
        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            return done(null, false, { message: 'Identifiants incorrects.' });
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    const user = users.find(user => user.id === id);
    done(null, user);
});

// Middleware pour vérifier l'authentification
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Ajoute un timestamp pour un nom unique
    }
});

const upload = multer({ storage: storage });

// Servir les fichiers statiques
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint pour l'upload de fichiers
app.post('/upload', ensureAuthenticated, upload.single('courseFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Aucun fichier téléchargé.');
    }
    const fileType = req.body.fileType;
    res.status(200).send({ filename: req.file.filename, fileType: fileType });
});

// Endpoint pour récupérer les fichiers
app.get('/files', (req, res) => {
    const fs = require('fs');
    const files = fs.readdirSync('uploads').map(file => {
        const fileType = file.includes('course') ? 'course' : 'td';
        return { filename: file, type: fileType, name: file };
    });
    res.json(files);
});

// Routes d'authentification
app.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/admin', ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
