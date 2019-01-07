const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const prefix = '$'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`By 𝒮ℋ𝒜𝒟𝒪𝒲| $help  `,"http://twitch.tv/S-F")
});




let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file//Toxic Codes
client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {//Toxic Codes
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');//Toxic Codes
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );//Toxic Codes
antibots[message.guild.id] = {//Toxic Codes
onoff: 'On',//Toxic Codes
}
message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)//Toxic Codes
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {//Toxic Codes
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });//Toxic Codes
            });
          }//Toxic Codes
 
        })
        //antibots with ON , OFF ! Toxic CODE
        //LIKE Premium Bot!
 
 
client.on('message', message => {//Toxic Codes
    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
antibots[message.guild.id] = {//Toxic Codes
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)//Toxic Codes
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {//Toxic Codes
            if (err) console.error(err)
            .catch(err => {//Toxic Codes
              console.error(err);//Toxic Codes
          });//Toxic Codes
            });//Toxic Codes
          }//Toxic Codes
 
        })//Toxic Codes
 
client.on("guildMemberAdd", member => {//Toxic Codes
  if(!antibots[member.guild.id]) antibots[member.guild.id] = {//Toxic Codes
onoff: 'Off'
}//Toxic Codes
  if(antibots[member.guild.id].onoff === 'Off') return;//Toxic Codes
if(member.user.bot) return member.kick()//Toxic Codes
})//Toxic Codes
 
fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {//Toxic Codes
if (err) console.error(err)//Toxic Codes
.catch(err => {//Toxic Codes
console.error(err);//Toxic Codes
});//Toxic Codes
 
})//Toxic Codes








client.login(process.env.BOT_TOKEN);
