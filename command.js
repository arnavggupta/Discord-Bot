const { REST, Routes } =require("discord.js");
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTE2MzQyNjI2NzQ5Njk4ODY5Mg.GEVdMi.TnAe9cf9-Svhn21REcztEBTAf7NBnoUgua3dkk");
  
  (async()=>{
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1163426267496988692"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);

  }
  })();