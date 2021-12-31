const Command = require("../Structures/Command.js");
const { Permissions } = require('discord.js');

module.exports = new Command({
  name: "kick",
  description: "kicks a user",
  async run(message, args, client) {
    const user = message.mentions.members.first();
    const reason = args.slice(1).join(" ");
    if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.reply("You dont have the perms for that idiot")
    if (!reason) return message.channel.send("You didnt give a reason ._.");
    if (message.mentions.has(client.user)) return message.reply("You cant kick a powerful being!!")
    if (message.mentions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.reply("Cant kick him, he has powers :(")
    if (user) {
      await user
        .kick({
          reason: reason,
        })
        .then(() => {
          message.channel.send(`@${member.user.tag} was kicked out!!`);
        });
    } else {
      message.channel.send("I cant find that user....");
    }
  },
});
