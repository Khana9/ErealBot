require("discord-reply");
require('dotenv').config();

const Discord = require('discord.js');
const PREFIX = '';
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } });
const fs = require("fs") /** Commands will be stores here */
const got = require("got");
const { MessageEmbed } = require("discord.js");
client.commands = new Discord.Collection();

/**When the bot is ready and to load in the commands */
client.on("ready", () => {
  console.log("Bot is ready")
  
  /**To fetch the commands */
  fs.readdir("./commands", (err, files) => {
    if (err) return console.log(err);
    
    /**To remove the .js of the files */
    let jsfile = files.filter(f => f.split(".").pop() == "js")
    if (jsfile.length == 0) { return console.log("No commands here!") }

    jsfile.forEach(f => {
      let props = require(`./commands/${f}`)
      client.commands.set(props.help.name, props)
    })
  })
})

/**To assign the prefix of the box and use that */
client.on("message", (message) => {
  
  /** this will make sure the bot dosent act on its own messages */
  if (message.author.bot) return;
  
  if (message.channel.type !== "text") return;
  /**If it isnt a text channel, return */
  
  /**This assigns the prefix for the bot */
  let prefix = "-";

  /**This will remove the prefix to make the command readable */
  let MessageArray = message.content.split(" ");
 
  /**This removes the prefix*/
  let cmd = MessageArray[0].slice(prefix.length)

  /**This takes in the command */
  let args = MessageArray.slice(1)

  /**Failsafes, if the message dosent include prefix bot does nothing */
  if (!message.content.startsWith(prefix)) return;

  let commandfile = client.commands.get(cmd);
  if (commandfile) { commandfile.run(client, message, args) }

})






/** Code for the meme command */
client.on('message', msg => {
  
  if (msg.content.includes("meme")) {
    got("https://meme-api.herokuapp.com/gimme").then((response) => {
      const data = JSON.parse(response.body);
      
      let meme = new MessageEmbed()
        .setTitle(`${data['title']}`)
        .setColor("RANDOM")
        .setDescription("Upvotes:" + " " + `${data['ups']}` + ".\n" + "Subreddit:" + " " + `${data['subreddit']}`)
        .setAuthor("Author:" + " " + `${data['author']}`)
        .setImage(`${data['url']}`)
      
        msg.channel.send(meme);
    });
  }
})






// This will DM the member if they change their nickname
client.on("guildMemberUpdate", (oldMember, newMember) => {
  
  if (oldMember.nickname !== newMember.nickname) {
    newMember.send("Hey there, You just changed your nickname!")
  }
})


// This will DM new members
client.on("guildMemberAdd", (member) => {
  
  let embed = new Discord.MessageEmbed()
    
    /** Description */ 
    .setTitle("Welcome to the server!")
    .setDescription(`Thanks for joining the server! Make sure to read the rules at #rules! :flushed:\n**Current Member Count:** ${member.guild.memberCount}\n**Owner:** ${member.guild.owner.user.tag}\n**Bot created by:** (TO BE CHANGED)`)
    .setColor("#cc3300")
    .setAuthor(member.guild.owner.user.tag, member.guild.owner.user.avatarURL())
    .setFooter(member.guild.name, member.guild.iconURL())
    .setThumbnail(member.user.avatarURL());

  member.send(embed)
})

/** Bot token */
client.login(process.env.TOKEN)
