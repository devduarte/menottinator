const tmi = require('tmi.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'menottinator',
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
            "El pastas.", "Lauricate (miralo vos,es global con 2 horas jugadas).",
            "El bigote del Sr Tuzo.",
            "Les mejores mods de la tierra.",
            "La coquita de cada dia.",
            "DJcorchacitos.",
            "La peabody de Mastecs.",
            "Los rolitos de la Clandenotti.",
            "El joven prodigio Tomks.",
            "El tilteo en el Fall Guys.",
            "l bot carajeado.",
            "Un ghostero.",
            "Un cheetero que se va a ir al infierno.",
            "La timba de cada stream.",
            "El Keru tilteado."
        ]
    }

    const resultados = setResultados()
    var item = resultados[Math.floor(Math.random() * resultados.length)];
    if(message.toLowerCase() === '!cn') {
        client.say(channel, `@${tags.username}, En el mundo de Clandenotti serías: ` + item);
    }
});