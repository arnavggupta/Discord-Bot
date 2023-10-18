require('dotenv').config();
const express=require("express");
const app=express();
const connectdb=require("./database/conn");
const { Client, GatewayIntentBits, escapeBold } =require("discord.js") ;
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
connectdb();
const shortid=require("shortid");
const user=require("./models/collection");
client.on('interactionCreate', (interaction) => {
    // if (!interaction.isChatInputCommand()) return;
  
    // if (interaction.commandName === 'ping') {
    //   await interaction.reply('Pong!');
    // }
   
    interaction.reply("pong");
  });
// const interaction=require("./command");
client.on("messageCreate",async(message)=>{
    if(message.author.bot)return;
    // message.reply({
        const shortide=shortid();
    //            content:"Thank you so much for joining Arnav gupta's server "
    // });
    // console.log(message.content);
const urlentry=new user({
shortyid:shortide,
redirecturl:message.content,
visithistory:[]
})

try{
await urlentry.save();
message.reply({
  content:`https://url-shortner-fziy.onrender.com/${shortide}`
})
}
catch(err){
  console.log(err);
}


});


app.get("/:shortyyid",async(req,res)=>{

const shortyy=req.params.shortyyid;
try {
  const result= await user.findOne({shortyid:shortyy});

  if(result){
    res.redirect(result.redirecturl);
  }
  else{
    res.status(400).send("Shorten Url Not found");
  }


} catch (error) {
  console.log(error);
  res.status(500).send("Internal Server error");
}

});







client.login("MTE2MzQyNjI2NzQ5Njk4ODY5Mg.G8VPUH.Vz4ticcn90v9mvC6KRhLsijPmEwOiYmNa4YY08");