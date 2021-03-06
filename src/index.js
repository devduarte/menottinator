const tmi = require('tmi.js');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const botname = 'menottinator'

app.listen(process.env.PORT, () =>
    console.log('Menottinator ' + process.env.PORT || 80)
);

const client = new tmi.Client({
    options: { debug: false },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: botname,
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: ['flacomenotti']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // Ignore echoed messages.
    if(self) return;

    function setResultados() {
        return ["El ewok desfigurado.",
            "El rey de los contenidos.",
            "El mismisimo Flaco Menouri.",
            "El pastas.",
            "Lauricate (miralo vos,es global con 2 horas jugadas).",
            "El bigote del Sr Tuzo.",
            "Les mejores mods de la tierra.",
            "La coquita de cada dia.",
            "DJcorchacitos.",
            "La nueva Ferrari de Mastecs.",
            "Los rolitos de la Clandenotti.",
            "El joven prodigio Tomks.",
            "El tilteo en el Fall Guys.",
            "El bot carajeado.",
            "Un ghostero.",
            "Un cheetero que se va a ir al infierno.",
            "La timba de cada stream.",
            "El Keru tilteado.",
            "El Antisexo.",
            "ya es tarde, bro. mañana te digo"
        ]
    }

    const resultados = setResultados()
    var item = resultados[Math.floor(Math.random() * resultados.length)];
    if(message.toLowerCase() === '!cn') {
        client.say(channel, `@${tags.username}, En el mundo de Clandenotti serías: ` + item);
    }
    if(message.toLowerCase().includes(`@${botname}`)){
        const rest2 = ["los bots no stremeamos.", "fui programado para que me guste el vino patero.", "no te hagas el cheto, flaco",
        "no ganan una partida ni en pedo", "<3 <3 yo tambien", "vos tambien <3 <3", "que onda amigue?"]
        const randomNumber = Math.floor(Math.random() * rest2.length)
        console.log("el randomNumber es: " + randomNumber)
        var item2 = rest2[randomNumber];
        console.log("el item2 es: " + item2)

        client.say(channel, `@${tags.username} ` + item2);
    }
});