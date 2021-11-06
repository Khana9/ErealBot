exports.run = async(client,message,args) =>{
    function Go8Ball(){
        var rand = ['Yes', 'No', 'Why are you even trying?', 'Find the answer on your own yeesh, loser.']
        return rand[Math.floor(Math.random() * rand.length)];
    }
    return message.reply(Go8Ball());
    }
exports.help = {
    name = "8ball"
}