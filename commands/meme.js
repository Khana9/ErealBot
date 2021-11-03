const got = require("got");
const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {

    /** Code for the meme command */
    if (message.content.includes("meme")) {
        got("https://meme-api.herokuapp.com/gimme").then((response) => {
            const data = JSON.parse(response.body);
            let meme = new MessageEmbed()
                .setTitle(`${data['title']}`)
                .setColor("RANDOM")
                .setDescription("Upvotes:" + " " + `${data['ups']}` + ".\n" + "Subreddit:" + " " + `${data['subreddit']}`)
                .setAuthor("Author:" + " " + `${data['author']}`)
                .setImage(`${data['url']}`)

            message.channel.send(meme);
        });
    }
}
exports.help = {
    name: "meme"
}
