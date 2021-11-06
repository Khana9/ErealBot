exports.run = async (client, message, args) => {
  
    message.lineReply(`Pong!, 🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  
}

exports.help = {
    name: "ping"
}