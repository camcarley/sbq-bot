const discord = require('discord.js');
const fetch = require('node-fetch');

const client = new discord.Client();

client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message',m =>{
    
    if (m.author.bot) return;
    
    if(!m.content.includes('!sbqfact')) return;
    
    const args = msg.join().split(' ');
    let msg;
    switch(args[1]){
        case 'help':
            console.log(`${m.author.username} has requested help!`);
        case `fact`:
            console.log(`${m.author.username} has requested a fact!`);
        case `add`:
            console.log(`${m.author.username} has added a fact!`);
        case `delete`:
            console.log(`${m.author.username} has deleted a fact!`);
        default:
            console.log(`${m.author.username} this command doesn't exist`);
            break;
    }

})

async function returnRandomFact(){
    return fetch('https://uselessfacts.jsph.pl/random.json?language=en')
}

client.login(process.env.TOKEN);
