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
    // Füge weitere Zootiere hinzu...
];

app.get('/', (req, res) => {
    res.render('index', { zooAnimals });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
