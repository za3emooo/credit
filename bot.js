const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('-جاهز', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : AlZa3EeM `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bot is Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credit')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep')
    }
});


client.on('message', message => { // 
if (message.content === '-سبام') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By AlZa3EeM , Farm Credit By AlZa3EeM, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]``**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // 
if (message.content === '-سبام') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By AlZa3EeM , Farm Credit By AlZa3EeM, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]``**Credit Spam , Frame , Credit By AlZa3EeM , Farm Credit By AlZa3EeM, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// 
client2.login(process.env.TOKEN2);// 
