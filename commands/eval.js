const Command = require("../Structures/Command.js");



module.exports = new Command({
	name: "eval",
	description: "evaluates text",
    async run(message, args, client) {
        const { member, channel, content} = message
        /**Change member ID to your "trusted" users */
        if (member.id === '329729744784326668' || '695042126559313941') {
            try{

            const result = eval(content.replace('-eval ', ''))
            message.reply("```javascript\n" + result + "```")
                .catch(() => console.log("Cannot send message!"));
            } catch (err) {
                message.reply("Invalid Command!")
            }
        }

    }
})