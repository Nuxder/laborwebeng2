// index.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const zooAnimals = [
    {
        name: 'Löwe',
        description: 'Ein majestätischer Löwe.',
        image: '/images/lion.jpg',
        species: 'Großkatze',
        origin: 'Afrika',
        age: 8,
        caretaker: 'Max Mustermann',
        comments: 'Sehr beeindruckendes Tier!'
    },
    {
        name: 'Giraffe',
        description: 'Eine hohe Giraffe mit langem Hals.',
        image: '/images/giraffe.jpg',
        species: 'Säugetier',
        origin: 'Afrika',
        age: 10,
        caretaker: 'Anna Schmidt',
        comments: 'Liebt es, Blätter von den Bäumen zu fressen.'
    },
    {
        name: 'Dino',
        description: 'Ein Alter Gecko.',
        image: '/images/reptil.png',
        species: 'Reptil',
        origin: 'Pangea',
        age: 10000000,
        caretaker: 'Meteor',
        comments: 'Liebt es, seinesgleichen zu vertilgen, ausgestorben.'
    },
    {
        name: 'Panda',
        description: 'Der wahre Panda.',
        image: '/images/RedPanda.jpeg',
        species: 'Säugetier',
        origin: 'Asien',
        age: 3,
        caretaker: 'Desiigner',
        comments: 'Betont immer gern, dass weiße Pandas fake sind.'
    },
    {
        name: 'Rentier',
        description: 'Rudolf und die Gang.',
        image: '/images/Rudy.jpeg',
        species: 'Säugetier',
        origin: 'Europa',
        age: 2023,
        caretaker: 'Klaus vom Nordpol',
        comments: 'Hat sich die Nase machen lassen.'
    },
    {
        name: 'Schnabeltier',
        description: 'Ein Schnabeltier? Perry das Schnabeltier?',
        image: '/images/Schnabeltier.jpeg',
        species: 'Säugetier',
        origin: 'Australien',
        age: 16,
        caretaker: 'Phineas und Ferb',
        comments: 'Doofenschmirtz fies sein ist unser Motto.'
    },
    {
        name: 'Fledermaus',
        description: 'Nicht die Fledermaus die wir verdient haben aber die Fledermaus die wir gerade brauchen.',
        image: '/images/Fledermaus.jpeg',
        species: 'Säugetier',
        origin: 'Gotham',
        age: 84,
        caretaker: 'Alfred Pennyworth',
        comments: 'Because I\'m Batman.'
    },
    {
        name: 'Bär',
        description: 'Ein kleiner Bär mit einem großen Traum.',
        image: '/images/Baer.jpeg',
        species: 'Säugetier',
        origin: 'Zamonien',
        age: 5,
        caretaker: 'Walter Moers',
        comments: 'Will auch mal Kapitän eines Segelschiffs sein wie sein Vater.'
    },
    // Füge weitere Zootiere hinzu...
];

app.get('/', (req, res) => {
    res.render('index', { zooAnimals });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
