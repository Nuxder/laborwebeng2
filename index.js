const express = require('express');
const app = express();
const port = 3000;

// Setze Pug als Template Engine
app.set('view engine', 'pug');

// Definiere einige Beispieldaten für Zootiere
const zooAnimals = [
    { name: 'Löwe', description: 'Ein majestätischer Löwe.' },
    { name: 'Giraffe', description: 'Eine hohe Giraffe mit langem Hals.' },
    // Füge weitere Zootiere hinzu...
];

// Definiere eine Routenbehandlung für die Startseite
app.get('/', (req, res) => {
    res.render('index', { zooAnimals });
});

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
