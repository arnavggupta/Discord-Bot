const { Client, GatewayIntentBits, escapeBold } =require("discord.js") ;
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
client.on('interactionCreate', (interaction) => {
    // if (!interaction.isChatInputCommand()) return;
  
    // if (interaction.commandName === 'ping') {
    //   await interaction.reply('Pong!');
    // }
   
    interaction.reply("pong");
  });
// const interaction=require("./command");
client.on("messageCreate",(message)=>{
    if(message.author.bot)return;
    message.reply({
    
        
        content:"Hi from bot"
    });

 

});
client.login("MTE2MzQyNjI2NzQ5Njk4ODY5Mg.GEVdMi.TnAe9cf9-Svhn21REcztEBTAf7NBnoUgua3dkk");