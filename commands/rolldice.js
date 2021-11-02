exports.run = async (client, message, args) => {
    if (message.content.toLowerCase().includes("dice")) {
        var response = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)];

        message.channel.send("**You rolled... **" + response + "!").then().catch(console.error);  // "You got... (1 - 6)!"
    }

}

exports.help = {
    name: "roll"
}