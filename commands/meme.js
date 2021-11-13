const got = require("got");
const { MessageEmbed } = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "meme",
	description: "sends a meme!",
    async run(message, args, client) {

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

            message.channel.send({ embeds: [meme] });
        });
    }
}
})
